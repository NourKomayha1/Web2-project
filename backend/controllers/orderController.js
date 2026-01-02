const db = require("../config/db");

/* ======================================================
   CREATE ORDER + DECREMENT BOOK QUANTITY
====================================================== */
exports.createOrder = (req, res) => {
  console.log("CREATE ORDER CALLED");

  const { items } = req.body; // [{ book_id, quantity }]
  const userId = req.user.id;

  console.log("User ID:", userId);
  console.log("Items received from frontend:", items);

  if (!items || items.length === 0) {
    console.log("Cart is empty");
    return res.status(400).json({ message: "Cart is empty" });
  }

  const bookIds = items.map((i) => i.book_id);
  console.log("Book IDs:", bookIds);

  // 1️Fetch books from DB
  db.query(
    "SELECT id, name, price, quantity FROM Books WHERE id IN (?)",
    [bookIds],
    (err, books) => {
      if (err) {
        console.error(" Error fetching books:", err);
        return res.status(500).json({ message: err.message });
      }

      console.log("Books fetched from DB:", books);

      let total = 0;

      // Validate stock
      for (let item of items) {
        const book = books.find((b) => b.id === item.book_id);

        if (!book) {
          console.log("Book not found:", item.book_id);
          return res
            .status(400)
            .json({ message: "Book not found" });
        }

        if (book.quantity < item.quantity) {
          console.log(
            `Not enough stock for book ${book.id}. Available: ${book.quantity}, Requested: ${item.quantity}`
          );
          return res.status(400).json({
            message: "Not enough stock for one or more books",
          });
        }

        total += book.price * item.quantity;
      }

      console.log("Total order price:", total);

      //  Insert order
      db.query(
        "INSERT INTO Orders (user_id, total) VALUES (?, ?)",
        [userId, total],
        (err, result) => {
          if (err) {
            console.error(" Error inserting order:", err);
            return res.status(500).json({ message: err.message });
          }

          const orderId = result.insertId;
          console.log("Order created with ID:", orderId);

          //  Insert order items
          const orderItems = items.map((i) => [
            orderId,
            i.book_id,
            i.quantity,
          ]);

          console.log("OrderItems to insert:", orderItems);

          db.query(
            "INSERT INTO OrderItems (order_id, book_id, quantity) VALUES ?",
            [orderItems],
            (err) => {
              if (err) {
                console.error(" Error inserting order items:", err);
                return res.status(500).json({ message: err.message });
              }

              console.log(" OrderItems inserted");

              //  Decrement stock
              items.forEach((i) => {
                console.log(
                  `Decreasing quantity for book ${i.book_id} by ${i.quantity}`
                );

                db.query(
                  "UPDATE Books SET quantity = quantity - ? WHERE id = ?",
                  [i.quantity, i.book_id],
                  (err, result) => {
                    if (err) {
                      console.error("Error updating quantity:", err);
                    } else {
                      console.log(
                        `Quantity updated for book ${i.book_id}. Rows affected:`,
                        result.affectedRows
                      );
                    }
                  }
                );
              });

              res.status(201).json({
                message: "Order placed successfully",
                orderId,
              });
            }
          );
        }
      );
    }
  );
};

/* ======================================================
   GET USER ORDERS
====================================================== */
exports.getUserOrders = (req, res) => {
  const sql = `
    SELECT 
      o.id AS order_id,
      o.total,
      o.created_at,
      b.id AS book_id,
      b.name,
      b.price,
      oi.quantity
    FROM Orders o
    JOIN OrderItems oi ON o.id = oi.order_id
    JOIN Books b ON oi.book_id = b.id
    WHERE o.user_id = ?`;

  db.query(sql, [req.user.id], (err, results) => {
    if (err) {
      console.error("Error fetching user orders:", err);
      return res.status(500).json({ message: err.message });
    }
    res.json(results);
  });
};

/* ======================================================
   GET ALL ORDERS (ADMIN)
====================================================== */
exports.getAllOrders = (req, res) => {
  const sql = `
    SELECT 
      o.id AS order_id,
      o.total,
      o.created_at,
      u.id AS user_id,
      u.name AS user_name,
      b.id AS book_id,
      b.name,
      b.price,
      oi.quantity
    FROM Orders o
    JOIN Users u ON o.user_id = u.id
    JOIN OrderItems oi ON o.id = oi.order_id
    JOIN Books b ON oi.book_id = b.id`;

  db.query(sql, (err, results) => {
    if (err) {
      console.error(" Error fetching all orders:", err);
      return res.status(500).json({ message: err.message });
    }
    res.json(results);
  });
};

// ===============================
// GET PURCHASED BOOKS FOR USER
// ===============================
exports.getPurchasedBooks = (req, res) => {
  const userId = req.user.id;

  const sql = `
    SELECT DISTINCT 
      b.id,
      b.name,
      b.author,
      b.pdf,
      b.image
    FROM Orders o
    JOIN OrderItems oi ON o.id = oi.order_id
    JOIN Books b ON oi.book_id = b.id
    WHERE o.user_id = ?
  `;

  db.query(sql, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(results);
  });
};



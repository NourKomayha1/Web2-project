const db = require("../config/db");

/* =========================
   GET ALL BOOKS
========================= */
exports.getAllBooks = (req, res) => {
  db.query("SELECT * FROM Books", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Server error" });
    }
    res.json(results);
  });
};

/* =========================
   GET BOOK BY ID
========================= */
exports.getBookById = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM Books WHERE id = ?", [id], (err, results) => {
    if (err || results.length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(results[0]);
  });
};

/* =========================
   CREATE BOOK (ADMIN)
========================= */
exports.createBook = (req, res) => {
  const { name, author, image, pdf, price, category, quantity } = req.body;

  if (!name || !author || !image || !price || !category || !quantity) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = `
    INSERT INTO Books (name, author, image, pdf, price, category, quantity)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, author, image, pdf, price, category, quantity],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error adding book" });
      }
      res.json({ message: "Book added successfully" });
    }
  );
};

/* =========================
   UPDATE BOOK (ADMIN)
========================= */
exports.updateBook = (req, res) => {
  const { id } = req.params;
  const { name, author, image, pdf, price, category, quantity } = req.body;

  const sql = `
    UPDATE Books
    SET name=?, author=?, image=?, pdf=?, price=?, category=?, quantity=?
    WHERE id=?
  `;

  db.query(
    sql,
    [name, author, image, pdf, price, category, quantity, id],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error updating book" });
      }
      res.json({ message: "Book updated successfully" });
    }
  );
};

/* =========================
   DELETE BOOK (ADMIN)
========================= */
exports.deleteBook = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM Books WHERE id=?", [id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error deleting book" });
    }
    res.json({ message: "Book deleted successfully" });
  });
};

import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [allBooks, setAllBooks] = useState([]);
  const [cart, setCart] = useState([]);

  // ===============================
  // FETCH BOOKS FROM DATABASE
  // ===============================
  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/books");
      // Ensure price & quantity are numbers
      const books = res.data.map((b) => ({
        ...b,
        price: Number(b.price),
        quantity: Number(b.quantity),
      }));
      setAllBooks(books);
    } catch (err) {
      console.error("Failed to fetch books", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // ===============================
  // CART FUNCTIONS
  // ===============================

  const addToCart = (book) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === book.id);

      if (existing) {
        // Prevent exceeding DB quantity
        if (existing.qty >= book.quantity) return prev;

        return prev.map((item) =>
          item.id === book.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...book, qty: 1 }];
    });
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <BooksContext.Provider
      value={{
        allBooks,
        cart,
        addToCart,
        decreaseQty,
        removeFromCart,
        clearCart,
        fetchBooks, // useful after purchase
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};



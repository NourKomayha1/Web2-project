// src/services/api.js

const API_URL = "http://localhost:5000/api";

// Login user
export const loginUser = async (email, password) => {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      // If server responds with error, throw it
      throw new Error(data.message || "Login failed");
    }

    // Save token and user info locally
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    return data;
  } catch (err) {
    console.error(err);
    return { message: err.message };
  }
};

// Register user
export const registerUser = async (name, email, password) => {
  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Signup failed");
    }

    return data;
  } catch (err) {
    console.error(err);
    return { message: err.message };
  }
};

// Fetch all books (Admin)
export const getAllBooks = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}/books`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to fetch books");
    return data;
  } catch (err) {
    console.error(err);
    return { message: err.message };
  }
};

// Add new book
export const addBook = async (book) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(book),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to add book");
    return data;
  } catch (err) {
    console.error(err);
    return { message: err.message };
  }
};

// Update book
export const updateBook = async (id, book) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(book),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to update book");
    return data;
  } catch (err) {
    console.error(err);
    return { message: err.message };
  }
};

// Delete book
export const deleteBook = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}/books/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to delete book");
    return data;
  } catch (err) {
    console.error(err);
    return { message: err.message };
  }
};

export const createOrder = async (items) => {
    const token = localStorage.getItem("token");
  
    const res = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ items }),
    });
  
    const text = await res.text();
  
    try {
      const data = JSON.parse(text);
      if (!res.ok) throw new Error(data.message || "Order failed");
      return data;
    } catch {
      console.error(" Backend returned HTML instead of JSON:");
      console.error(text);
      throw new Error("Server error — check backend route or auth");
    }
  };
  

  export const getMyPurchasedBooks = async () => {
    const token = localStorage.getItem("token");
  
    const res = await fetch("http://localhost:5000/api/orders/my-books", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
  };
  

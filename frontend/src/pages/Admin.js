import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Button, Form } from "react-bootstrap";

export default function Admin() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const [editingBook, setEditingBook] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    author: "",
    price: "",
    quantity: "",
    category: "",
    image: "",
    pdf: "",
  });

  const [newBook, setNewBook] = useState({
    name: "",
    author: "",
    price: "",
    quantity: "",
    category: "english",
    image: "",
    pdf: "",
  });

  const token = localStorage.getItem("token");

  // ===============================
  // FETCH BOOKS
  // ===============================
  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/books");
      setBooks(res.data);
    } catch (err) {
      alert("Failed to fetch books");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // ===============================
  // ADD BOOK
  // ===============================
  const addBook = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/books",
        newBook,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setNewBook({
        name: "",
        author: "",
        price: "",
        quantity: "",
        category: "english",
        image: "",
        pdf: "",
      });

      fetchBooks();
    } catch (err) {
      alert("Failed to add book");
    }
  };

  // ===============================
  // DELETE BOOK
  // ===============================
  const deleteBook = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/books/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setBooks((prev) => prev.filter((b) => b.id !== id));
    } catch {
      alert("Failed to delete book");
    }
  };

  // ===============================
  // UPDATE BOOK
  // ===============================
  const startEdit = (book) => {
    setEditingBook(book.id);
    setEditData({
      name: book.name,
      author: book.author,
      price: book.price,
      quantity: book.quantity,
      category: book.category,
      image: book.image, 
      pdf: book.pdf,     
    });
  };

  const saveEdit = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/books/${id}`,
        editData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEditingBook(null);
      fetchBooks();
    } catch {
      alert("Failed to update book");
    }
  };

  // ===============================
  // FILTER BOOKS
  // ===============================
  const filteredBooks = books.filter((book) => {
    const matchCategory =
      categoryFilter === "all" || book.category === categoryFilter;

    const matchSearch =
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <Container className="py-4">
      <h2 className="mb-4">Admin Dashboard</h2>

      {/* ADD BOOK */}
      <h5>Add New Book</h5>
      <Form className="mb-4">
        <Form.Control
          className="mb-2"
          placeholder="Name"
          value={newBook.name}
          onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
        />
        <Form.Control
          className="mb-2"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <Form.Control
          className="mb-2"
          placeholder="Price"
          type="number"
          value={newBook.price}
          onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
        />
        <Form.Control
          className="mb-2"
          placeholder="Quantity"
          type="number"
          value={newBook.quantity}
          onChange={(e) => setNewBook({ ...newBook, quantity: e.target.value })}
        />
        <Form.Select
          className="mb-2"
          value={newBook.category}
          onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
        >
          <option value="english">English</option>
          <option value="arabic">Arabic</option>
        </Form.Select>
        <Form.Control
          className="mb-2"
          placeholder="Image URL"
          value={newBook.image}
          onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
        />
        <Form.Control
          className="mb-2"
          placeholder="PDF URL"
          value={newBook.pdf}
          onChange={(e) => setNewBook({ ...newBook, pdf: e.target.value })}
        />
        <Button onClick={addBook}>Add Book</Button>
      </Form>

      {/* SEARCH & FILTER */}
      <Form.Control
        className="mb-2"
        placeholder="Search by name or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Form.Select
        className="mb-3"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="english">English</option>
        <option value="arabic">Arabic</option>
      </Form.Select>

      {/* BOOKS TABLE */}
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.id}>
              <td>
                {editingBook === book.id ? (
                  <input
                    value={editData.name}
                    onChange={(e) =>
                      setEditData({ ...editData, name: e.target.value })
                    }
                  />
                ) : (
                  book.name
                )}
              </td>

              <td>
                {editingBook === book.id ? (
                  <input
                    value={editData.author}
                    onChange={(e) =>
                      setEditData({ ...editData, author: e.target.value })
                    }
                  />
                ) : (
                  book.author
                )}
              </td>

              <td>
                {editingBook === book.id ? (
                  <input
                    type="number"
                    value={editData.price}
                    onChange={(e) =>
                      setEditData({ ...editData, price: e.target.value })
                    }
                  />
                ) : (
                  `$${book.price}`
                )}
              </td>

              <td>
                {editingBook === book.id ? (
                  <input
                    type="number"
                    value={editData.quantity}
                    onChange={(e) =>
                      setEditData({ ...editData, quantity: e.target.value })
                    }
                  />
                ) : (
                  book.quantity
                )}
              </td>

              <td>
                {editingBook === book.id ? (
                  <select
                    value={editData.category}
                    onChange={(e) =>
                      setEditData({ ...editData, category: e.target.value })
                    }
                  >
                    <option value="english">English</option>
                    <option value="arabic">Arabic</option>
                  </select>
                ) : (
                  book.category
                )}
              </td>

              <td>
                {editingBook === book.id ? (
                  <>
                    <Button
                      size="sm"
                      variant="success"
                      className="me-2"
                      onClick={() => saveEdit(book.id)}
                    >
                      Save
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setEditingBook(null)}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      size="sm"
                      variant="warning"
                      className="me-2"
                      onClick={() => startEdit(book)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => deleteBook(book.id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

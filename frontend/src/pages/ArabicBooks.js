import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BooksContext } from "../context/booksContext";
import "../style/styles.css";

function ArabicBooks() {
  const { addToCart } = useContext(BooksContext);
  const [arabicBooks, setArabicBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/books");
      // Filter only Arabic books and convert price to number
      const filtered = res.data
        .filter((b) => b.category === "arabic")
        .map((b) => ({ ...b, price: Number(b.price) }));
      setArabicBooks(filtered);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4 fw-bold">Arabic Books</h2>
      <Row className="g-4">
        {arabicBooks.map((book) => (
          <Col key={book.id} xs={6} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={book.image}
                alt={book.name}
                className="book-card-img"
              />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">{book.name}</Card.Title>
                <Card.Text className="text-muted mb-1">{book.author}</Card.Text>
                <Card.Text className="fw-semibold text-primary">
                  ${book.price.toFixed(2)}
                  <br />
                  <button
                    onClick={() => addToCart(book)}
                    className="btn btn-primary mt-2"
                  >
                    Add to Cart
                  </button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ArabicBooks;


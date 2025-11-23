import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../style/styles.css";
import "../style/Cart.css";

export default function PurchasedBooks() {
  const [purchasedBooks, setPurchasedBooks] = useState([]);

  // Load purchased books from localStorage on component mount
  useEffect(() => {
    const savedPurchasedBooks = localStorage.getItem('purchasedBooks');
    if (savedPurchasedBooks) {
      try {
        const parsedBooks = JSON.parse(savedPurchasedBooks);
        
        // Group books by title and combine quantities
        const uniqueBooks = {};
        parsedBooks.forEach(book => {
          if (uniqueBooks[book.title]) {
            // If book already exists, add to quantity
            uniqueBooks[book.title].qty += book.qty;
          } else {
            // If book doesn't exist, add it
            uniqueBooks[book.title] = { ...book };
          }
        });
        
        // Convert object back to array
        const uniqueBooksArray = Object.values(uniqueBooks);
        setPurchasedBooks(uniqueBooksArray);
      } catch (error) {
        console.error('Error loading purchased books:', error);
      }
    }
  }, []);

  return (
    <div className="cart-page">
      <Container className="py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="cart-title mb-0">My Purchased Books</h1>
          <Link to="/books" className="btn btn-outline-primary">
            Continue Shopping
          </Link>
        </div>

        {purchasedBooks.length === 0 ? (
          <Card className="empty-cart-card text-center">
            <Card.Body className="p-5">
              <div className="empty-cart-icon mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5v-6zM6 7v5h5V7H6z"/>
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3z"/>
                </svg>
              </div>
              <h3 className="mb-3">No Purchased Books Yet</h3>
              <p className="text-muted mb-4">You haven't purchased any books yet. Start shopping to build your library!</p>
              <Link to="/books" className="btn btn-primary btn-lg">
                Browse Books
              </Link>
            </Card.Body>
          </Card>
        ) : (
          <>
            <Card className="purchase-success-card text-center mb-4">
              <Card.Body className="p-4">
                <div className="success-icon mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.061L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                </div>
                <h3 className="mb-2">Your Library</h3>
                <p className="text-muted mb-0">You have {purchasedBooks.length} {purchasedBooks.length === 1 ? 'book' : 'books'} in your library. Download them anytime!</p>
              </Card.Body>
            </Card>

            <Card className="purchased-books-section">
              <Card.Body>
                <h4 className="mb-4">Download Your Books</h4>
                <Row className="g-3">
                  {purchasedBooks.map((book, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3}>
                      <Card className="download-book-card h-100">
                        <Card.Body>
                          <div className="text-center mb-3">
                            <img 
                              src={book.image} 
                              alt={book.title}
                              className="download-book-image mb-2"
                            />
                            <h6 className="mb-1">{book.title}</h6>
                            <p className="text-muted small mb-2">{book.author}</p>
                            <p className="text-muted small mb-2">Quantity: {book.qty}</p>
                          </div>
                          <a
                            className="btn btn-primary w-100 btn-sm"
                            href={book.pdf}
                            download
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" className="me-1">
                              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                            </svg>
                            Download PDF
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </>
        )}
      </Container>
    </div>
  );
}


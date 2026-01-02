 import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../context/booksContext";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../style/styles.css";
import "../style/Cart.css";
import { createOrder } from "../services/api";
import { getMyPurchasedBooks } from "../services/api";


export default function Cart() {
  const {
    cart,
    addToCart,
    decreaseQty,
    removeFromCart,
    clearCart,
    fetchBooks,
  } = useContext(BooksContext);

  const [purchased, setPurchased] = useState(false);
  const [purchasedBooks, setPurchasedBooks] = useState([]);

  // ===============================
  // Load purchased books from storage
  // ===============================
  useEffect(() => {
    const loadPurchasedBooks = async () => {
      try {
        const data = await getMyPurchasedBooks();
        setPurchasedBooks(data);
      } catch (err) {
        console.log("No purchased books yet");
      }
    };
  
    loadPurchasedBooks();
  }, []);
  

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 3;
  const finalTotal = total + shipping;

  // ===============================
  // HANDLE PURCHASE
  // ===============================
  const handlePurchase = async () => {
    try {
      const orderItems = cart.map((item) => ({
        book_id: item.id,
        quantity: item.qty,
      }));

      await createOrder(orderItems);

      // Keep previous purchased PDFs
      setPurchasedBooks((prev) => {
        const updated = [...prev, ...cart];
        localStorage.setItem("purchasedBooks", JSON.stringify(updated));
        return updated;
      });

      clearCart();
      fetchBooks();
      setPurchased(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="cart-page">
      <Container className="py-5">
        <h1 className="cart-title mb-4">Shopping Cart</h1>

        {/* Empty Cart */}
        {cart.length === 0 && !purchased && purchasedBooks.length === 0 && (
          <Card className="empty-cart-card text-center">
            <Card.Body className="p-5">
              <h3>Your cart is empty</h3>
              <Link to="/books" className="btn btn-primary mt-3">
                Browse Books
              </Link>
            </Card.Body>
          </Card>
        )}

        {/* Purchase Success */}
        {purchased && purchasedBooks.length > 0 && (
          <Card className="purchase-success-card text-center mb-4">
            <Card.Body>
              <h3>Thank you for your purchase!</h3>
              <p className="text-muted">
                You can download your purchased books below.
              </p>
            </Card.Body>
          </Card>
        )}

        {/* Purchased Books */}
        {purchasedBooks.length > 0 && (
          <Card className="purchased-books-section mb-4">
            <Card.Body>
              <h4>Your Purchased Books</h4>
              <Row className="g-3">
                {purchasedBooks.map((book, index) => (
                  <Col key={index} md={4}>
                    <Card className="download-book-card">
                      <Card.Body className="text-center">
                        <img
                          src={book.image}
                          alt={book.name}
                          className="download-book-image mb-2"
                        />
                        <h6>{book.name}</h6>
                        <p className="text-muted">{book.author}</p>
                        <a
                          href={book.pdf}
                          download
                          className="btn btn-primary btn-sm"
                        >
                          Download PDF
                        </a>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        )}

        {/* Cart Items */}
        {cart.length > 0 && (
          <Row>
            <Col lg={8}>
              {cart.map((book) => (
                <Card key={book.id} className="cart-item-card mb-3">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col md={2}>
                        <img
                          src={book.image}
                          alt={book.name}
                          className="cart-item-image"
                        />
                      </Col>
                      <Col md={4}>
                        <h5>{book.name}</h5>
                        <p className="text-muted">{book.author}</p>
                        <p>${book.price.toFixed(2)}</p>
                      </Col>
                      <Col md={3}>
                        <button
                          className="btn btn-sm quantity-btn"
                          onClick={() => decreaseQty(book.id)}
                          disabled={book.qty <= 1}
                        >
                          −
                        </button>
                        <span className="mx-2">{book.qty}</span>
                        <button
                          className="btn btn-sm quantity-btn"
                          onClick={() => addToCart(book)}
                        >
                          +
                        </button>
                      </Col>
                      <Col md={2}>
                        ${(book.price * book.qty).toFixed(2)}
                      </Col>
                      <Col md={1} className="text-end">
                        <button
                          className="btn btn-sm remove-btn"
                          onClick={() => removeFromCart(book.id)}
                        >
                          ✕
                        </button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </Col>

            {/* Summary */}
            <Col lg={4}>
              <Card className="order-summary-card">
                <Card.Body>
                  <h4>Order Summary</h4>
                  <p>Subtotal: ${total.toFixed(2)}</p>
                  <p>Shipping: ${shipping.toFixed(2)}</p>
                  <hr />
                  <h5>Total: ${finalTotal.toFixed(2)}</h5>

                  {!purchased ? (
                    <button
                      className="btn btn-primary w-100 mt-3"
                      onClick={handlePurchase}
                    >
                      Complete Purchase
                    </button>
                  ) : (
                    <Link to="/books" className="btn btn-outline-primary w-100">
                      Continue Shopping
                    </Link>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}
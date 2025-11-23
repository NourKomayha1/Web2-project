import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BooksContext } from "../context/booksContext";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../style/styles.css";
import "../style/Cart.css";

export default function Cart() {
  const { cart, addToCart, decreaseQty, removeFromCart, clearCart } = useContext(BooksContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const subtotal = total;
  const shipping = 3; // $3 shipping fee
  const finalTotal = subtotal + shipping;

  const handlePurchase = () => {
    // Get existing purchased books from localStorage
    const existingPurchasedBooks = localStorage.getItem('purchasedBooks');
    let allPurchasedBooks = [];
    
    if (existingPurchasedBooks) {
      try {
        allPurchasedBooks = JSON.parse(existingPurchasedBooks);
      } catch (error) {
        console.error('Error parsing existing purchased books:', error);
      }
    }
    
    // Add current cart to purchased books
    allPurchasedBooks = [...allPurchasedBooks, ...cart];
    
    // Save to localStorage
    localStorage.setItem('purchasedBooks', JSON.stringify(allPurchasedBooks));
    
    // Clear the cart
    clearCart();
    
    // Navigate to purchased books page
    navigate('/purchased');
  };

  return (
    <div className="cart-page">
      <Container className="py-5">
        <h1 className="cart-title mb-4">Shopping Cart</h1>

        {/* Empty Cart State */}
        {cart.length === 0 && (
          <Card className="empty-cart-card text-center">
            <Card.Body className="p-5">
              <div className="empty-cart-icon mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.618 4l1.5 7h8.764l1.5-7H3.618zM5 14a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm9 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
              </div>
              <h3 className="mb-3">Your cart is empty</h3>
              <p className="text-muted mb-4">Looks like you haven't added any books to your cart yet.</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/books" className="btn btn-primary btn-lg">
                  Browse Books
                </Link>
                {localStorage.getItem('purchasedBooks') && (
                  <Link to="/purchased" className="btn btn-outline-primary btn-lg">
                    View My Books
                  </Link>
                )}
              </div>
            </Card.Body>
          </Card>
        )}

        {/* Cart Items - Always visible when cart has items */}
        {cart.length > 0 && (
          <Row>
            <Col lg={8}>
              <div className="cart-items">
                {cart.map((book, index) => (
                  <Card key={index} className="cart-item-card mb-3">
                    <Card.Body>
                      <Row className="align-items-center">
                        <Col xs={4} sm={3} md={2}>
                          <img 
                            src={book.image} 
                            alt={book.title}
                            className="cart-item-image"
                          />
                        </Col>
                        <Col xs={8} sm={9} md={10}>
                          <Row className="align-items-center">
                            <Col md={5}>
                              <h5 className="cart-item-title mb-1">{book.title}</h5>
                              <p className="cart-item-author text-muted mb-2">{book.author}</p>
                              <p className="cart-item-price mb-0">${book.price.toFixed(2)}</p>
                            </Col>
                            <Col md={3}>
                              <div className="quantity-controls">
                                <button 
                                  className="btn btn-sm quantity-btn" 
                                  onClick={() => decreaseQty(book.title)}
                                  disabled={book.qty <= 1}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                  </svg>
                                </button>
                                <span className="quantity-display">{book.qty}</span>
                                <button 
                                  className="btn btn-sm quantity-btn" 
                                  onClick={() => addToCart(book)}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                  </svg>
                                </button>
                              </div>
                            </Col>
                            <Col md={2} className="text-center">
                              <p className="cart-item-total mb-0">
                                ${(book.price * book.qty).toFixed(2)}
                              </p>
                            </Col>
                            <Col md={2} className="text-end">
                              <button
                                className="btn btn-sm remove-btn"
                                onClick={() => removeFromCart(book.title)}
                                title="Remove item"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg>
                              </button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Col>

            {/* Order Summary */}
            <Col lg={4}>
              <Card className="order-summary-card sticky-top">
                <Card.Body>
                  <h4 className="summary-title mb-4">Order Summary</h4>
                  
                  <div className="summary-row">
                    <span>Subtotal ({cart.length} {cart.length === 1 ? 'item' : 'items'})</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="summary-row">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  
                  <hr className="summary-divider" />
                  
                  <div className="summary-row total-row">
                    <span className="fw-bold">Total</span>
                    <span className="fw-bold">${finalTotal.toFixed(2)}</span>
                  </div>

                  <button
                    className="btn btn-primary w-100 mt-4 checkout-btn"
                    onClick={handlePurchase}
                  >
                    Complete Purchase
                  </button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}



import React, { useContext } from 'react';

import {Link} from 'react-router-dom';
import pic from '../assets/home.png'
import '../style/NavBar.css'
import '../style/styles.css'


import { BooksContext } from '../context/booksContext';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  const { allBooks,addToCart } = useContext(BooksContext);

  // Filter only Trending books
  const trendingBooks = allBooks.filter(book => book.trend === 'yes');

  return (
    <div className="home-page">
      <div className="home-hero-section mb-4">
        <Link to="/" className="home-image-link">
          <img src={pic} alt='Bookstore' className="home-hero-image"/>
        </Link>
      </div>
      
      <Container className="mt-4">
        <div className="home-title-section text-center mb-4">
          <h1 className="home-title">Trending Books</h1>
          <p className="home-subtitle">Discover our most popular titles</p>
        </div>
        
        <Row className="g-4">
          {trendingBooks.map((book, index) => (
            <Col key={index} xs={6} sm={6} md={4} lg={3}>
              <Card className="h-100 shadow-sm border-0 home-book-card">
                <Card.Img
                  variant="top"
                  src={book.image}
                  alt={book.title}
                  className="book-card-img"
                  style={{
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px'
                  }}
                />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{book.title}</Card.Title>
                  <Card.Text className="text-muted mb-1">{book.author}</Card.Text>
                  <Card.Text className="fw-semibold text-primary mb-3">
                    ${book.price.toFixed(2)}
                  </Card.Text>
                  <button onClick={() => addToCart(book)} className="btn btn-primary w-100">
                    Add to Cart
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;

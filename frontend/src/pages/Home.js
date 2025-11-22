
import React, { useContext } from 'react';
import BookCard from '../components/BookCard';
import {Link} from 'react-router-dom';
import pic from '../assets/home.png'
import '../style/NavBar.css'


import { BooksContext } from '../context/booksContext';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  const { allBooks,addToCart } = useContext(BooksContext);

  // Filter only Trending books
  const trendingBooks = allBooks.filter(book => book.trend === 'yes');

  return (
    
    <div className="full size">
       <Link to="/"><img src={pic} alt='not found'/></Link>
      <h2 className="mb-4">Trending Books</h2>
      
      <Container className="mt-4">
      
      <Row className="g-4">
        {trendingBooks.map((book, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={book.image}
                alt={book.title}
                style={{
                  height: '400px',
                  
                  objectFit: 'cover',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px'
                }}
              />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">{book.title}</Card.Title>
                <Card.Text className="text-muted mb-1">{book.author}</Card.Text>
                <Card.Text className="fw-semibold text-primary">
                  ${book.price.toFixed(2)}
                  <br></br>
                  <button onClick={() => addToCart(book)} className="btn btn-primary">
                    Add to Cart
                  </button>
                </Card.Text>
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

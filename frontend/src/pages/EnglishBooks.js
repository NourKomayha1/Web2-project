
import React, { useContext } from 'react';
import { BooksContext } from '../context/booksContext';
import { Container, Row, Col, Card } from 'react-bootstrap';

function EnglishBooks() {
  const { allBooks,addToCart } = useContext(BooksContext);

  // Filter only English books
  const arabicBooks = allBooks.filter(book => book.lang === 'eng');

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4 fw-bold">English Books</h2>
      <Row className="g-4">
        {arabicBooks.map((book, index) => (
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
  );
}

export default EnglishBooks;



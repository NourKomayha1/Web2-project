import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../style/styles.css';



function BookCard({ title, author, price, image }) {
  return (
    <Card className="m-3 shadow-sm" style={{ width: '16rem' }}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        <Card.Text>${price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;

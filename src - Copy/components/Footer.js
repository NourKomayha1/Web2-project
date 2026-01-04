import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer mt-auto py-4">
      <Container>
        <Row className="text-center text-md-start">
          {/* Logo / Brand */}
          <Col md={4} className="mb-3">
            <h3 className="footer-brand">Bookies</h3>
            <p className="footer-desc">
            The best online bookshop
              based in Lebanon
            </p>
          </Col>

         
          <Col md={4} className="mb-3">
            <h5 className="footer-title">Explore</h5>
            <ul className="footer-links list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/books">All Books</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
          <h5 className="footer-title">Categories</h5>
          <ul className="footer-links list-unstyled">
              <li><Link to="/arabicBooks">Arabic Books</Link></li>
              <li><Link to="/englishBooks">English Books</Link></li>
          </ul>
          </Col>
          
        </Row>

        <hr className="footer-divider" />

        {/* Bottom Text */}
        <Row>
          <Col className="text-center">
            <p className="footer-bottom mb-0">
              &copy; {new Date().getFullYear()} <strong>BookiesLB</strong> — All rights reserved 💜
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;


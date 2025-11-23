import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../style/styles.css';
import '../style/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Row className="g-4 mb-4">
              {/* Contact Information Cards */}
              <Col md={4}>
                <Card className="contact-info-card h-100 text-center">
                  <Card.Body>
                    <div className="contact-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                      </svg>
                    </div>
                    <h5 className="mt-3 mb-2">Email Us</h5>
                    <p className="text-muted mb-0">info@bookstore.com</p>
                    <p className="text-muted">support@bookstore.com</p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="contact-info-card h-100 text-center">
                  <Card.Body>
                    <div className="contact-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.65 10.5a.678.678 0 0 1-.58-.122L6.864 8.35a.678.678 0 0 1-.122-.58l.737-3.235a.678.678 0 0 0-.122-.58L5.285 2.091a.678.678 0 0 0-.631-.763Z"/>
                      </svg>
                    </div>
                    <h5 className="mt-3 mb-2">Call Us</h5>
                    <p className="text-muted mb-0">+961 81-850522</p>
                    <p className="text-muted">Mon-Fri 9am-6pm</p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="contact-info-card h-100 text-center">
                  <Card.Body>
                    <div className="contact-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>
                    </div>
                    <h5 className="mt-3 mb-2">Visit Us</h5>
                    <p className="text-muted mb-0">Kafarsir</p>
                   
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Contact Form */}
            <Card className="contact-form-card">
              <Card.Body className="p-4 p-md-5">
                <h3 className="text-center mb-4">Send Us a Message</h3>
                <form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
                      <input 
                        type="text" 
                        className="form-control contact-input" 
                        id="name"
                        placeholder="Enter your name"
                        required
                      />
                    </Col>
                    <Col md={6} className="mb-3">
                      <label htmlFor="email" className="form-label fw-semibold">Your Email</label>
                      <input 
                        type="email" 
                        className="form-control contact-input" 
                        id="email"
                        placeholder="Enter your email"
                        required
                      />
                    </Col>
                  </Row>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-semibold">Subject</label>
                    <input 
                      type="text" 
                      className="form-control contact-input" 
                      id="subject"
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold">Your Message</label>
                    <textarea 
                      className="form-control contact-input" 
                      id="message"
                      rows="5" 
                      placeholder="Tell us more about your inquiry..."
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-lg px-5">
                      Send Message
                    </button>
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;

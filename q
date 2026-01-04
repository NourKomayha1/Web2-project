warning: in the working copy of 'frontend/package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'frontend/src/components/NavBar.js', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/backend/config/db.js b/backend/config/db.js[m
[1mindex d0670e6..770538b 100644[m
[1m--- a/backend/config/db.js[m
[1m+++ b/backend/config/db.js[m
[36m@@ -1,12 +1,17 @@[m
 const mysql = require("mysql2");[m
 [m
[31m-const db = mysql.createConnection(process.env.MYSQL_URL);[m
[32m+[m[32mconst db = mysql.createConnection({[m
[32m+[m[32m  host: process.env.DB_HOST || 'localhost',[m
[32m+[m[32m  user: process.env.DB_USER || 'root',[m
[32m+[m[32m  password: process.env.DB_PASSWORD || '',[m
[32m+[m[32m  database: process.env.DB_NAME || 'bookstore_db'[m
[32m+[m[32m});[m
 [m
 db.connect(err => {[m
   if (err) {[m
     console.error("MySQL connection failed:", err.message);[m
   } else {[m
[31m-    console.log("MySQL Connected to Railway");[m
[32m+[m[32m    console.log("MySQL Connected to Local MySQL");[m
   }[m
 });[m
 [m
[1mdiff --git a/frontend/package.json b/frontend/package.json[m
[1mindex a81f900..5f21d21 100644[m
[1m--- a/frontend/package.json[m
[1m+++ b/frontend/package.json[m
[36m@@ -2,7 +2,7 @@[m
   "name": "frontend",[m
   "version": "0.1.0",[m
   "private": true,[m
[31m-  "homepage": "/",[m
[32m+[m[32m  "homepage": "https://nourkomayha1.github.io",[m
   "dependencies": {[m
     "@testing-library/dom": "^10.4.1",[m
     "@testing-library/jest-dom": "^6.9.1",[m
[1mdiff --git a/frontend/src - Copy/App.css b/frontend/src - Copy/App.css[m
[1mdeleted file mode 100644[m
[1mindex 74b5e05..0000000[m
[1m--- a/frontend/src - Copy/App.css[m	
[1m+++ /dev/null[m
[36m@@ -1,38 +0,0 @@[m
[31m-.App {[m
[31m-  text-align: center;[m
[31m-}[m
[31m-[m
[31m-.App-logo {[m
[31m-  height: 40vmin;[m
[31m-  pointer-events: none;[m
[31m-}[m
[31m-[m
[31m-@media (prefers-reduced-motion: no-preference) {[m
[31m-  .App-logo {[m
[31m-    animation: App-logo-spin infinite 20s linear;[m
[31m-  }[m
[31m-}[m
[31m-[m
[31m-.App-header {[m
[31m-  background-color: #282c34;[m
[31m-  min-height: 100vh;[m
[31m-  display: flex;[m
[31m-  flex-direction: column;[m
[31m-  align-items: center;[m
[31m-  justify-content: center;[m
[31m-  font-size: calc(10px + 2vmin);[m
[31m-  color: white;[m
[31m-}[m
[31m-[m
[31m-.App-link {[m
[31m-  color: #61dafb;[m
[31m-}[m
[31m-[m
[31m-@keyframes App-logo-spin {[m
[31m-  from {[m
[31m-    transform: rotate(0deg);[m
[31m-  }[m
[31m-  to {[m
[31m-    transform: rotate(360deg);[m
[31m-  }[m
[31m-}[m
[1mdiff --git a/frontend/src - Copy/App.js b/frontend/src - Copy/App.js[m
[1mdeleted file mode 100644[m
[1mindex f5a9846..0000000[m
[1m--- a/frontend/src - Copy/App.js[m	
[1m+++ /dev/null[m
[36m@@ -1,36 +0,0 @@[m
[31m-import React from 'react';[m
[31m-import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';[m
[31m-import { BooksProvider } from './context/booksContext';[m
[31m-[m
[31m-import NavBar from './components/NavBar';[m
[31m-import Footer from './components/Footer';[m
[31m-import Home from './pages/Home';[m
[31m-import Books from './pages/Books';[m
[31m-import Cart from './pages/Cart';[m
[31m-import About from './pages/About';[m
[31m-import Contact from './pages/Contact';[m
[31m-import ArabicBooks from './pages/ArabicBooks';[m
[31m-import EnglishBooks from './pages/EnglishBooks';[m
[31m-[m
[31m-function App() {[m
[31m-  return ([m
[31m-    <BooksProvider>[m
[31m-    <Router>[m
[31m-      <NavBar />[m
[31m-      <Routes>[m
[31m-        <Route path="/" element={<Home />} />[m
[31m-        <Route path="/books" element={<Books />} />[m
[31m-        <Route path="/cart" element={<Cart />} />[m
[31m-        <Route path="/about" element={<About />} />[m
[31m-        <Route path="/contact" element={<Contact />} />[m
[31m-        <Route path="/arabic" element={<ArabicBooks />} />[m
[31m-        <Route path="/english" element={<EnglishBooks />} />[m
[31m-[m
[31m-      </Routes>[m
[31m-      <Footer />[m
[31m-    </Router>[m
[31m-    </BooksProvider> [m
[31m-  );[m
[31m-}[m
[31m-[m
[31m-export default App;[m
[1mdiff --git a/frontend/src - Copy/App.test.js b/frontend/src - Copy/App.test.js[m
[1mdeleted file mode 100644[m
[1mindex 1f03afe..0000000[m
[1m--- a/frontend/src - Copy/App.test.js[m	
[1m+++ /dev/null[m
[36m@@ -1,8 +0,0 @@[m
[31m-import { render, screen } from '@testing-library/react';[m
[31m-import App from './App';[m
[31m-[m
[31m-test('renders learn react link', () => {[m
[31m-  render(<App />);[m
[31m-  const linkElement = screen.getByText(/learn react/i);[m
[31m-  expect(linkElement).toBeInTheDocument();[m
[31m-});[m
[1mdiff --git a/frontend/src - Copy/assets/about.png b/frontend/src - Copy/assets/about.png[m
[1mdeleted file mode 100644[m
[1mindex 263a89c..0000000[m
Binary files a/frontend/src - Copy/assets/about.png and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/about2.png b/frontend/src - Copy/assets/about2.png[m
[1mdeleted file mode 100644[m
[1mindex 8070d5a..0000000[m
Binary files a/frontend/src - Copy/assets/about2.png and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book1.jpg b/frontend/src - Copy/assets/book1.jpg[m
[1mdeleted file mode 100644[m
[1mindex 47273d7..0000000[m
Binary files a/frontend/src - Copy/assets/book1.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book10.jpg b/frontend/src - Copy/assets/book10.jpg[m
[1mdeleted file mode 100644[m
[1mindex d57be17..0000000[m
Binary files a/frontend/src - Copy/assets/book10.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book11.jpg b/frontend/src - Copy/assets/book11.jpg[m
[1mdeleted file mode 100644[m
[1mindex 14c1da3..0000000[m
Binary files a/frontend/src - Copy/assets/book11.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book12.jpg b/frontend/src - Copy/assets/book12.jpg[m
[1mdeleted file mode 100644[m
[1mindex 37d0350..0000000[m
Binary files a/frontend/src - Copy/assets/book12.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book13.jpg b/frontend/src - Copy/assets/book13.jpg[m
[1mdeleted file mode 100644[m
[1mindex d4ecc7b..0000000[m
Binary files a/frontend/src - Copy/assets/book13.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book14.jpg b/frontend/src - Copy/assets/book14.jpg[m
[1mdeleted file mode 100644[m
[1mindex b762953..0000000[m
Binary files a/frontend/src - Copy/assets/book14.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book15.jpg b/frontend/src - Copy/assets/book15.jpg[m
[1mdeleted file mode 100644[m
[1mindex 0ca435b..0000000[m
Binary files a/frontend/src - Copy/assets/book15.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book16.jpg b/frontend/src - Copy/assets/book16.jpg[m
[1mdeleted file mode 100644[m
[1mindex dd7ea59..0000000[m
Binary files a/frontend/src - Copy/assets/book16.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book17.jpg b/frontend/src - Copy/assets/book17.jpg[m
[1mdeleted file mode 100644[m
[1mindex 18fcabb..0000000[m
Binary files a/frontend/src - Copy/assets/book17.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book18.jpg b/frontend/src - Copy/assets/book18.jpg[m
[1mdeleted file mode 100644[m
[1mindex 9e97697..0000000[m
Binary files a/frontend/src - Copy/assets/book18.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book19.jpg b/frontend/src - Copy/assets/book19.jpg[m
[1mdeleted file mode 100644[m
[1mindex 3f63cf7..0000000[m
Binary files a/frontend/src - Copy/assets/book19.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book2.jpg b/frontend/src - Copy/assets/book2.jpg[m
[1mdeleted file mode 100644[m
[1mindex bae49bb..0000000[m
Binary files a/frontend/src - Copy/assets/book2.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book20.jpg b/frontend/src - Copy/assets/book20.jpg[m
[1mdeleted file mode 100644[m
[1mindex d87609c..0000000[m
Binary files a/frontend/src - Copy/assets/book20.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book21.jpg b/frontend/src - Copy/assets/book21.jpg[m
[1mdeleted file mode 100644[m
[1mindex 9dddee0..0000000[m
Binary files a/frontend/src - Copy/assets/book21.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book22.jpg b/frontend/src - Copy/assets/book22.jpg[m
[1mdeleted file mode 100644[m
[1mindex db5dcf9..0000000[m
Binary files a/frontend/src - Copy/assets/book22.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book23.jpg b/frontend/src - Copy/assets/book23.jpg[m
[1mdeleted file mode 100644[m
[1mindex c5c9739..0000000[m
Binary files a/frontend/src - Copy/assets/book23.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book24.jpeg b/frontend/src - Copy/assets/book24.jpeg[m
[1mdeleted file mode 100644[m
[1mindex 72b558e..0000000[m
Binary files a/frontend/src - Copy/assets/book24.jpeg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book25.jpg b/frontend/src - Copy/assets/book25.jpg[m
[1mdeleted file mode 100644[m
[1mindex e01c81d..0000000[m
Binary files a/frontend/src - Copy/assets/book25.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book26.jpg b/frontend/src - Copy/assets/book26.jpg[m
[1mdeleted file mode 100644[m
[1mindex 1e2c91a..0000000[m
Binary files a/frontend/src - Copy/assets/book26.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book27.jpg b/frontend/src - Copy/assets/book27.jpg[m
[1mdeleted file mode 100644[m
[1mindex ff41238..0000000[m
Binary files a/frontend/src - Copy/assets/book27.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book28.jpg b/frontend/src - Copy/assets/book28.jpg[m
[1mdeleted file mode 100644[m
[1mindex 9cfdda1..0000000[m
Binary files a/frontend/src - Copy/assets/book28.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book29.jpg b/frontend/src - Copy/assets/book29.jpg[m
[1mdeleted file mode 100644[m
[1mindex f5737df..0000000[m
Binary files a/frontend/src - Copy/assets/book29.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book3.jpg b/frontend/src - Copy/assets/book3.jpg[m
[1mdeleted file mode 100644[m
[1mindex 605d3c1..0000000[m
Binary files a/frontend/src - Copy/assets/book3.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book4.jpg b/frontend/src - Copy/assets/book4.jpg[m
[1mdeleted file mode 100644[m
[1mindex 1cf759c..0000000[m
Binary files a/frontend/src - Copy/assets/book4.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book5.jpg b/frontend/src - Copy/assets/book5.jpg[m
[1mdeleted file mode 100644[m
[1mindex 4ec8311..0000000[m
Binary files a/frontend/src - Copy/assets/book5.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book6.jpg b/frontend/src - Copy/assets/book6.jpg[m
[1mdeleted file mode 100644[m
[1mindex f990dc1..0000000[m
Binary files a/frontend/src - Copy/assets/book6.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book7.jpg b/frontend/src - Copy/assets/book7.jpg[m
[1mdeleted file mode 100644[m
[1mindex 9c5294e..0000000[m
Binary files a/frontend/src - Copy/assets/book7.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book8.jpg b/frontend/src - Copy/assets/book8.jpg[m
[1mdeleted file mode 100644[m
[1mindex 143f13f..0000000[m
Binary files a/frontend/src - Copy/assets/book8.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/book9.jpg b/frontend/src - Copy/assets/book9.jpg[m
[1mdeleted file mode 100644[m
[1mindex 4c02909..0000000[m
Binary files a/frontend/src - Copy/assets/book9.jpg and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/contact.png b/frontend/src - Copy/assets/contact.png[m
[1mdeleted file mode 100644[m
[1mindex 90d73bc..0000000[m
Binary files a/frontend/src - Copy/assets/contact.png and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/contact2.png b/frontend/src - Copy/assets/contact2.png[m
[1mdeleted file mode 100644[m
[1mindex 2261e65..0000000[m
Binary files a/frontend/src - Copy/assets/contact2.png and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/home.png b/frontend/src - Copy/assets/home.png[m
[1mdeleted file mode 100644[m
[1mindex 66bfee0..0000000[m
Binary files a/frontend/src - Copy/assets/home.png and /dev/null differ
[1mdiff --git a/frontend/src - Copy/assets/reading.png b/frontend/src - Copy/assets/reading.png[m
[1mdeleted file mode 100644[m
[1mindex 8852a70..0000000[m
Binary files a/frontend/src - Copy/assets/reading.png and /dev/null differ
[1mdiff --git a/frontend/src - Copy/components/BookCard.js b/frontend/src - Copy/components/BookCard.js[m
[1mdeleted file mode 100644[m
[1mindex ba31678..0000000[m
[1m--- a/frontend/src - Copy/components/BookCard.js[m	
[1m+++ /dev/null[m
[36m@@ -1,20 +0,0 @@[m
[31m-import React from 'react';[m
[31m-import { Card, Button } from 'react-bootstrap';[m
[31m-[m
[31m-[m
[31m-[m
[31m-function BookCard({ title, author, price, image }) {[m
[31m-  return ([m
[31m-    <Card className="m-3 shadow-sm" style={{ width: '16rem' }}>[m
[31m-      <Card.Img variant="top" src={image} alt={title} />[m
[31m-      <Card.Body>[m
[31m-        <Card.Title>{title}</Card.Title>[m
[31m-        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>[m
[31m-        <Card.Text>${price}</Card.Text>[m
[31m-        <Button variant="primary">Add to Cart</Button>[m
[31m-      </Card.Body>[m
[31m-    </Card>[m
[31m-  );[m
[31m-}[m
[31m-[m
[31m-export default BookCard;[m
[1mdiff --git a/frontend/src - Copy/components/Footer.js b/frontend/src - Copy/components/Footer.js[m
[1mdeleted file mode 100644[m
[1mindex 68b14cd..0000000[m
[1m--- a/frontend/src - Copy/components/Footer.js[m	
[1m+++ /dev/null[m
[36m@@ -1,55 +0,0 @@[m
[31m-import React from 'react';[m
[31m-import { Container, Row, Col } from 'react-bootstrap';[m
[31m-import '../style/Footer.css';[m
[31m-import { Link } from 'react-router-dom';[m
[31m-[m
[31m-function Footer() {[m
[31m-  return ([m
[31m-    <footer className="footer mt-auto py-4">[m
[31m-      <Container>[m
[31m-        <Row className="text-center text-md-start">[m
[31m-          {/* Logo / Brand */}[m
[31m-          <Col md={4} className="mb-3">[m
[31m-            <h3 className="footer-brand">Bookies</h3>[m
[31m-            <p className="footer-desc">[m
[31m-            The best online bookshop[m
[31m-              based in Lebanon[m
[31m-            </p>[m
[31m-          </Col>[m
[31m-[m
[31m-         [m
[31m-          <Col md={4} className="mb-3">[m
[31m-            <h5 className="footer-title">Explore</h5>[m
[31m-            <ul className="footer-links list-unstyled">[m
[31m-              <li><Link to="/">Home</Link></li>[m
[31m-              <li><Link to="/books">All Books</Link></li>[m
[31m-              <li><Link to="/contact">Contact</Link></li>[m
[31m-            </ul>[m
[31m-          </Col>[m
[31m-          <Col md={4} className="mb-3">[m
[31m-          <h5 className="footer-title">Categories</h5>[m
[31m-          <ul className="footer-links list-unstyled">[m
[31m-              <li><Link to="/arabicBooks">Arabic Books</Link></li>[m
[31m-              <li><Link to="/englishBooks">English Books</Link></li>[m
[31m-          </ul>[m
[31m-          </Col>[m
[31m-          [m
[31m-        </Row>[m
[31m-[m
[31m-        <hr className="footer-divider" />[m
[31m-[m
[31m-        {/* Bottom Text */}[m
[31m-        <Row>[m
[31m-          <Col className="text-center">[m
[31m-            <p className="footer-bottom mb-0">[m
[31m-              &copy; {new Date().getFullYear()} <strong>BookiesLB</strong> — All rights reserved 💜[m
[31m-            </p>[m
[31m-          </Col>[m
[31m-        </Row>[m
[31m-      </Container>[m
[31m-    </footer>[m
[31m-  );[m
[31m-}[m
[31m-[m
[31m-export default Footer;[m
[31m-[m
[1mdiff --git a/frontend/src - Copy/components/NavBar.js b/frontend/src - Copy/components/NavBar.js[m
[1mdeleted file mode 100644[m
[1mindex 3daef7f..0000000[m
[1m--- a/frontend/src - Copy/components/NavBar.js[m	
[1m+++ /dev/null[m
[36m@@ -1,45 +0,0 @@[m
[31m-import { Navbar, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';[m
[31m-import { Link } from 'react-router-dom';[m
[31m-import '../style/NavBar.css';[m
[31m-[m
[31m-[m
[31m-function NavigationBar() {[m
[31m-  return ([m
[31m-    [m
[31m-    <>[m
[31m-    [m
[31m-      <Navbar expand="lg" bg="dak" className="custom-navbar shadow-sm">[m
[31m-        <Container fluid>[m
[31m-          <Navbar.Toggle aria-controls="navbar-nav" />[m
[31m-          <Navbar.Brand as={Link} to="/" className="mx-auto position-absolute start-50 translate-middle-x">[m
[31m-          Bookies[m
[31m-        </Navbar.Brand>[m
[31m-          [m
[31m-          <Navbar.Offcanvas id="offcanvasNavbar-expand-lg" aria-labelledby="offcanvasNavbarLabel-expand-lg" placement="start">[m
[31m-            <Offcanvas.Header closeButton>[m
[31m-              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">[m
[31m-                Menu[m
[31m-              </Offcanvas.Title>[m
[31m-            </Offcanvas.Header>[m
[31m-            <Offcanvas.Body>[m
[31m-              <Nav className="justify-content-end flex-grow-1 pe-3">[m
[31m-                <Nav.Link as={Link} to="/">Home</Nav.Link>[m
[31m-                <NavDropdown title="Books" id="books-dropdown">[m
[31m-                  <NavDropdown.Item as={Link} to="/books">All Books</NavDropdown.Item>[m
[31m-                  <NavDropdown.Item as={Link} to="/arabic">Arabic Books</NavDropdown.Item>[m
[31m-                  <NavDropdown.Item as={Link} to="/english">English Books</NavDropdown.Item>[m
[31m-                </NavDropdown>[m
[31m-                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>[m
[31m-                <Nav.Link as={Link} to="/about">About</Nav.Link>[m
[31m-                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>[m
[31m-              </Nav>[m
[31m-            </Offcanvas.Body>[m
[31m-          </Navbar.Offcanvas>[m
[31m-        </Container>[m
[31m-      </Navbar>[m
[31m-      [m
[31m-    </>[m
[31m-  );[m
[31m-}[m
[31m-[m
[31m-export default NavigationBar;[m
[1mdiff --git a/frontend/src - Copy/context/booksContext.js b/frontend/src - Copy/context/booksContext.js[m
[1mdeleted file mode 100644[m
[1mindex 985952c..0000000[m
[1m--- a/frontend/src - Copy/context/booksContext.js[m	
[1m+++ /dev/null[m
[36m@@ -1,65 +0,0 @@[m
[31m-import React, { createContext, useState } from 'react';[m
[31m-import book1 from '../assets/book1.jpg';[m
[31m-import book2 from '../assets/book2.jpg';[m
[31m-import book3 from '../assets/book3.jpg';[m
[31m-import book4 from '../assets/book4.jpg';[m
[31m-import book5 from '../assets/book5.jpg';[m
[31m-import book6 from '../assets/book6.jpg';[m
[31m-import book7 from '../assets/book7.jpg';[m
[31m-import book8 from '../assets/book8.jpg';[m
[31m-import book9 from '../assets/book9.jpg';[m
[31m-import book10 from '../assets/book10.jpg';[m
[31m-import book11 from '../assets/book11.jpg';[m
[31m-import book12 from '../assets/book12.jpg';[m
[31m-import book13 from '../assets/book13.jpg';[m
[31m-import book14 from '../assets/book14.jpg';[m
[31m-[m
[31m-[m
[31m-import book18 from '../assets/book18.jpg';[m
[31m-import book19 from '../assets/book19.jpg';[m
[31m-import book20 from '../assets/book20.jpg';[m
[31m-import book21 from '../assets/book21.jpg';[m
[31m-import book22 from '../assets/book22.jpg';[m
[31m-import book23 from '../assets/book23.jpg';[m
[31m-[m
[31m-[m
[31m-import book26 from '../assets/book26.jpg';[m
[31m-import book27 from '../assets/book27.jpg';[m
[31m-import book28 from '../assets/book28.jpg';[m
[31m-[m
[31m-export const BooksContext = createContext();[m
[31m-[m
[31m-export function BooksProvider({ children }) {[m
[31m-  const [allBooks, setAllBooks] = useState([[m
[31m-    { title: 'كل ازق السماء', author: 'ميليسا دا كوستا', price: 14.50, image: book1, lang: 'ar' ,trend:'yes'},[m
[31m-    { title: 'ارض زيكولا', author: 'عمرو عبد الحميد', price: 11.99, image: book2, lang: 'ar' ,trend:'no'},[m
[31m-    { title: 'ارني انظر اليك', author: 'خولة حمدي', price: 10.99, image: book3, lang: 'ar' ,trend:'no'},[m
[31m-    { title: 'ملحمة الحراشيف', author: 'نجيب محفوظ', price: 9.99, image: book4, lang: 'ar',trend:'yes' },[m
[31m-    { title: 'الف شمس ساطعة', author: 'خالد حسني', price: 10.99, image: book5, lang: 'ar' ,trend:'no'},[m
[31m-    { title: 'ان تبقى', author: 'خولة حمدي', price: 17.99, image: book6, lang: 'ar' ,trend:'no'},[m
[31m-    { title: 'اولاد حارتنا', author: 'نجيب محفوظ ', price: 11.99, image: book7, lang: 'ar' ,trend:'no'},[m
[31m-    { title: 'اين المفر  ', author: 'خولة حمدي', price: 15.99, image: book8, lang: 'ar' ,trend:'no'},[m
[31m-    { title: 'عداء الطائرة الورقية  ', author: 'خالد حسني ', price: 10.99, image: book9, lang: 'ar' ,trend:'no'},[m
[31m-    { title: ' غربة الياسمين ', author: 'خولة حمدي', price: 20.99, image: book10, lang: 'ar' ,trend:'yes'},[m
[31m-    { title: 'في قلبي انثى عبرية  ', author: 'خولة حمدي', price: 18.99, image: book11, lang: 'ar' ,trend:'no'},[m
[31m-    { title: 'قلب الليل  ', author: 'نجيب محفوظ ', price: 16.99, image: book12, lang: 'ar' ,trend:'no'},[m
[31m-    { title: '  ليالي الف ليلة', author: 'نجيب محفوظ ', price: 15.99, image: book13, lang: 'ar' ,trend:'yes'},[m
[31m-    { title: 'وردت الجبال الصدى  ', author: ' خالد حسني', price: 19.99, image: book14, lang: 'ar' ,trend:'no'},[m
[31m-[m
[31m-    { title: 'Before I Knew I love you ', author: 'Toshikazo ', price: 12.99, image: book18, lang: 'eng',trend:'no' },[m
[31m-    { title: 'Before the coffe gets cold ', author: 'Toshikazo ', price: 10.99, image: book19, lang: 'eng',trend:'no' },[m
[31m-    { title: 'It Ends with us ', author: ' colen hover', price: 14.99, image: book20, lang: 'eng',trend:'no' },[m
[31m-    { title: 'The kite runner ', author: ' khaled hosni', price: 11.99, image: book21, lang: 'eng',trend:'no' },[m
[31m-    { title: ' The 5 Love language', author: 'Gari Chapman ', price: 18.99, image: book22, lang: 'eng',trend:'no' },[m
[31m-    { title: 'The 100$ startup ', author: 'chris  ', price: 15.99, image: book23, lang: 'eng',trend:'no' },[m
[31m-    { title: ' Cant hurt me', author: '  David Goggins', price: 7.99, image: book27, lang: 'eng',trend:'no' },[m
[31m-    { title: ' verity', author: ' collen hover ', price: 12, image: book26, lang: 'eng',trend:'no' },[m
[31m-    { title: 'Before the memory fades ', author: 'Toshikazo ', price: 10, image: book28, lang: 'eng',trend:'no' },[m
[31m-  ]);[m
[31m-[m
[31m-  return ([m
[31m-    <BooksContext.Provider value={{ allBooks, setAllBooks }}>[m
[31m-      {children}[m
[31m-    </BooksContext.Provider>[m
[31m-  );[m
[31m-}[m
[1mdiff --git a/frontend/src - Copy/index.css b/frontend/src - Copy/index.css[m
[1mdeleted file mode 100644[m
[1mindex ec2585e..0000000[m
[1m--- a/frontend/src - Copy/index.css[m	
[1m+++ /dev/null[m
[36m@@ -1,13 +0,0 @@[m
[31m-body {[m
[31m-  margin: 0;[m
[31m-  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',[m
[31m-    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',[m
[31m-    sans-serif;[m
[31m-  -webkit-font-smoothing: antialiased;[m
[31m-  -moz-osx-font-smoothing: grayscale;[m
[31m-}[m
[31m-[m
[31m-code {[m
[31m-  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',[m
[31m-    monospace;[m
[31m-}[m
[1mdiff --git a/frontend/src - Copy/index.js b/frontend/src - Copy/index.js[m
[1mdeleted file mode 100644[m
[1mindex 2e587e7..0000000[m
[1m--- a/frontend/src - Copy/index.js[m	
[1m+++ /dev/null[m
[36m@@ -1,19 +0,0 @@[m
[31m-import React from 'react';[m
[31m-import ReactDOM from 'react-dom/client';[m
[31m-import './index.css';[m
[31m-import App from './App';[m
[31m-import reportWebVitals from './reportWebVitals';[m
[31m-[m
[31m-import 'bootstrap/dist/css/bootstrap.min.css';[m
[31m-[m
[31m-const root = ReactDOM.createRoot(document.getElementById('root'));[m
[31m-root.render([m
[31m-  <React.StrictMode>[m
[31m-    <App />[m
[31m-  </React.StrictMode>[m
[31m-);[m
[31m-[m
[31m-// If you want to start measuring performance in your app, pass a function[m
[31m-// to log results (for example: reportWebVitals(console.log))[m
[31m-// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals[m
[31m-reportWebVitals();[m
[1mdiff --git a/frontend/src - Copy/logo.svg b/frontend/src - Copy/logo.svg[m
[1mdeleted file mode 100644[m
[1mindex 9dfc1c0..0000000[m
[1m--- a/frontend/src - Copy/logo.svg[m	
[1m+++ /dev/null[m
[36m@@ -1 +0,0 @@[m
[31m-<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/><circle cx="420.9" cy="296.5" r="45.7"/><path d="M520.5 78.1z"/></g></svg>[m
\ No newline at end of file[m
[1mdiff --git a/frontend/src - Copy/pages/About.js b/frontend/src - Copy/pages/About.js[m
[1mdeleted file mode 100644[m
[1mindex 8a855f8..0000000[m
[1m--- a/frontend/src - Copy/pages/About.js[m	
[1m+++ /dev/null[m
[36m@@ -1,17 +0,0 @@[m
[31m-import React from 'react';[m
[31m-import {Link} from 'react-router-dom';[m
[31m-import pic1 from '../assets/about.png'[m
[31m-import pic2 from '../assets/about2.png'[m
[31m-[m
[31m-[m
[31m-function About() {[m
[31m-  return ([m
[31m-    <div>[m
[31m-     [m
[31m-      <Link to="/"><img src={pic1} alt='not found'/></Link>[m
[31m-      <Link to="/"><img src={pic2} alt='not found'/></Link>[m
[31m-    </div>[m
[31m-  );[m
[31m-}[m
[31m-[m
[31m-export default About;[m
[1mdiff --git a/frontend/src - Copy/pages/ArabicBooks.js b/frontend/src - Copy/pages/ArabicBooks.js[m
[1mdeleted file mode 100644[m
[1mindex 05fe26c..0000000[m
[1m--- a/frontend/src - Copy/pages/ArabicBooks.js[m	
[1m+++ /dev/null[m
[36m@@ -1,44 +0,0 @@[m
[31m-import React, { useContext } from 'react';[m
[31m-import { BooksContext } from '../context/booksContext';[m
[31m-import { Container, Row, Col, Card } from 'react-bootstrap';[m
[31m-[m
[31m-function ArabicBooks() {[m
[31m-  const { allBooks } = useContext(BooksContext);[m
[31m-[m
[31m-  // Filter only Arabic books[m
[31m-  const arabicBooks = allBooks.filter(book => book.lang === 'ar');[m
[31m-[m
[31m-  return ([m
[31m-    <Container className="mt-4">[m
[31m-      <h2 className="text-center mb-4 fw-bold">Arabic Books</h2>[m
[31m-      <Row className="g-4">[m
[31m-        {arabicBooks.map((book, index) => ([m
[31m-          <Col key={index} xs={12} sm={6} md={4} lg={3}>[m
[31m-            <Card className="h-100 shadow-sm border-0">[m
[31m-              <Card.Img[m
[31m-                variant="top"[m
[31m-                src={book.image}[m
[31m-                alt={book.title}[m
[31m-                style={{[m
[31m-                  height: '400px',[m
[31m-                  objectFit: 'cover',[m
[31m-                  borderTopLeftRadius: '10px',[m
[31m-                  borderTopRightRadius: '10px'[m
[31m-                }}[m
[31m-              />[m
[31m-              <Card.Body className="text-center">[m
[31m-                <Card.Title className="fw-bold">{book.title}</Card.Title>[m
[31m-                <Card.Text className="text-muted mb-1">{book.author}</Card.Text>[m
[31m-                <Card.Text className="fw-semibold text-primary">[m
[31m-                  ${book.price.toFixed(2)}[m
[31m-                </Card.Text>[m
[31m-              </Card.Body>[m
[31m-            </Card>[m
[31m-          </Col>[m
[31m-        ))}[m
[31m-      </Row>[m
[31m-    </Container>[m
[31m-  );[m
[31m-}[m
[31m-[m
[31m-export default ArabicBooks;[m
[1mdiff --git a/frontend/src - Copy/pages/Books.js b/frontend/src - Copy/pages/Books.js[m
[1mdeleted file mode 100644[m
[1mindex 3281d2f..0000000[m
[1m--- a/frontend/src - Copy/pages/Books.js[m	
[1m+++ /dev/null[m
[36m@@ -1,38 +0,0 @@[m
[31m-import React, { useContext } from 'react';[m
[31m-import { BooksContext } from '../context/booksContext';[m
[31m-import { Container, Row, Col, Card } from 'react-bootstrap';[m
[31m-import '../style/styles.css'[m
[31m-[m
[31m-function Books() {[m
[31m-  const { allBooks } = useContext(BooksContext);[m
[31m-[m
[31m-  return ([m
[31m-    <Container className="mt-4">[m
[31m-      <h2 className="text-center mb-4 fw-bold">All Books</h2>[m
[31m-      <Row className="g-4">[m
[31m-        {allBooks.map((book, index) => ([m
[31m-          <Col key={index} xs={12} sm={6} md={4} lg={3}>[m
[31m-            <Card className="h-100 shadow-sm border-0">[m
[31m-              <Card.Img[m
[31m-                variant="top"[m
[31m-                src={book.image}[m
[31m-                alt={book.title}[m
[31m-                style={{ height: '400px', objectFit: 'cover' }}[m
[31m-              />[m
[31m-              <Card.Body className="text-center">[m
[31m-                <Card.Title className="fw-bold">{book.title}</Card.Title>[m
[31m-                <Card.Text className="text-muted mb-1">{book.author}</Card.Text>[m
[31m-                <Card.Text className="fw-semibold text-primary">[m
[31m-                  ${book.price.toFixed(2)}[m
[31m-                </Card.Text>[m
[31m-              </Card.Body>[m
[31m-            </Card>[m
[31m-          </Col>[m
[31m-        ))}[m
[31m-      </Row>[m
[31m-    </Container>[m
[31m-  );[m
[31m-}[m
[31m-[m
[31m-export default Books;[m
[31m-[m
[1mdiff --git a/frontend/src - Copy/pages/Cart.js b/frontend/src - Copy/pages/Cart.js[m
[1mdeleted file mode 100644[m
[1mindex aae131b..0000000[m
[1m--- a/frontend/src - Copy/pages/Cart.js[m	
[1m+++ /dev/null[m
[36m@@ -1,12 +0,0 @@[m
[31m-import React from 'react';[m
[31m-[m
[31m-function Cart() {[m
[31m-  return ([m
[31m-    <div className="container mt-5 text-center">[m
[31m-      <h2>Your Cart</h2>[m
[31m-      <p className="text-muted">You haven’t added any books yet.</p>[m
[31m-    </div>[m
[31m-  );[m
[31m-}[m
[31m-[m
[31m-export default Cart;[m
[1mdiff --git a/frontend/src - Copy/pages/Contact.js b/frontend/src - Copy/pages/Contact.js[m
[1mdeleted file mode 100644[m
[1mindex b3b56ea..0000000[m
[1m--- a/frontend/src - Copy/pages/Contact.js[m	
[1m+++ /dev/null[m
[36m@@ -1,26 +0,0 @@[m
[31m-import React from 'react';[m
[31m-[m
[31m-function Contact() {[m
[31m-  return ([m
[31m-    <div className="container mt-5">[m
[31m-      <h2 className="text-center mb-4">Contact Us</h2>[m
[31m-      <form className="mx-auto" style={{ maxWidth: '500px' }}>[m
[31m-        <div className="mb-3">[m
[31m-          <label className="form-label">Name</label>[m
[31m-          <input type="text" className="form-control" placeholder="Enter your name" />[m
[31m-        </div>[m
[31m-        <div className="mb-3">[m
[31m-          <label className="form-label">Email</label>[m
[31m-          <input type="email" className="form-control" placeholder="Enter your email" />[m
[31m-        </div>[m
[31m-        <div className="mb-3">[m
[31m-          <label className="form-label">Message</label>[m
[31m-          <textarea className="form-control" rows="3" placeholder="Your message"></textarea>[m
[31m-        </div>[m
[31m-        <button className="btn btn-primary w-100">Send Message</button>[m
[31m-      </form>[m
[31m-    </div>[m
[31m-  );[m
[31m-}[m
[31m-[m
[31m-export default Contact;[m
[1mdiff --git a/frontend/src - Copy/pages/EnglishBooks.js b/frontend/src - Copy/pages/EnglishBooks.js[m
[1mdeleted file mode 100644[m
[1mindex 8ff7975..0000000[m
[1m--- a/frontend/src - Copy/pages/EnglishBooks.js[m	
[1m+++ /dev/null[m
[36m@@ -1,46 +0,0 @@[m
[31m-import React, { useContext } from 'react';[m
[31m-import { BooksContext } from '../context/booksContext';[m
[31m-import { Container, Row, Col, Card } from 'react-bootstrap';[m
[31m-[m
[31m-function EnglishBooks() {[m
[31m-  const { allBooks } = useContext(BooksContext);[m
[31m-[m
[31m-  // Filter only English books[m
[31m-  const arabicBooks = allBooks.filter(book => book.lang === 'eng');[m
[31m-[m
[31m-  return ([m
[31m-    <Container className="mt-4">[m
[31m-      <h2 className="text-center mb-4 fw-bold">English Books</h2>[m
[31m-      <Row className="g-4">[m
[31m-        {arabicBooks.map((book, index) => ([m
[31m-          <Col key={index} xs={12} sm={6} md={4} lg={3}>[m
[31m-            <Card className="h-100 shadow-sm border-0">[m
[31m-              <Card.Img[m
[31m-                variant="top"[m
[31m-                src={book.image}[m
[31m-                alt={book.title}[m
[31m-                style={{[m
[31m-                  height: '400px',[m
[31m-                  objectFit: 'cover',[m
[31m-                  borderTopLeftRadius: '10px',[m
[31m-                  borderTopRightRadius: '10px'[m
[31m-                }}[m
[31m-              />[m
[31m-              <Card.Body className="text-center">[m
[31m-                <Card.Title className="fw-bold">{book.title}</Card.Title>[m
[31m-                <Card.Text className="text-muted mb-1">{book.author}</Card.Text>[m
[31m-                <Card.Text className="fw-semibold text-primary">[m
[31m-                  ${book.price.toFixed(2)}[m
[31m-                </Card.Text>[m
[31m-              </Card.Body>[m
[31m-            </Card>[m
[31m-          </Col>[m
[31m-        ))}[m
[31m-      </Row>[m
[31m-    </Container>[m
[31m-  );[m
[31m-}[m
[31m-[m
[31m-export default EnglishBooks;[m
[31m-[m
[31m-[m
[1mdiff --git a/frontend/src - Copy/pages/Home.js b/frontend/src - Copy/pages/Home.js[m
[1mdeleted file mode 100644[m
[1mindex 71baea6..0000000[m
[1m--- a/frontend/src - Copy/pages/Home.js[m	
[1m+++ /dev/null[m
[36m@@ -1,57 +0,0 @@[m
[31m-import React, { useContext } from 'react';[m
[31m-import BookCard from '../components/BookCard';[m
[31m-import {Link} from 'react-router-dom';[m
[31m-import pic from '../assets/home.png'[m
[31m-import '../style/NavBar.css'[m
[31m-[m
[31m-[m
[31m-import { BooksContext } from '../context/booksContext';[m
[31m-import { Container, Row, Col, Card } from 'react-bootstrap';[m
[31m-[m
[31m-function Home() {[m
[31m-  const { allBooks } = useContext(BooksContext);[m
[31m-[m
[31m-  // Filter only Trending books[m
[31m-  const trendingBooks = allBooks.filter(book => book.trend === 'yes');[m
[31m-[m
[31m-  return ([m
[31m-    [m
[31m-    <div className="full size">[m
[31m-       <Link to="/"><img src={pic} alt='not found'/></Link>[m
[31m-      <h2 className="mb-4">Trending Books</h2>[m
[31m-      [m
[31m-      <Container className="mt-4">[m
[31m-      [m
[31m-      <Row className="g-4">[m
[31m-        {trendingBooks.map((book, index) => ([m
[31m-          <Col key={index} xs={12} sm={6} md={4} lg={3}>[m
[31m-            <Card className="h-100 shadow-sm border-0">[m
[31m-              <Card.Img[m
[31m-                variant="top"[m
[31m-                src={book.image}[m
[31m-                alt={book.title}[m
[31m-                style={{[m
[31m-                  height: '400px',[m
[31m-                  [m
[31m-                  objectFit: 'cover',[m
[31m-                  borderTopLeftRadius: '10px',[m
[31m-                  borderTopRightRadius: '10px'[m
[31m-                }}[m
[31m-              />[m
[31m-              <Card.Body className="text-center">[m
[31m-                <Card.Title className="fw-bold">{book.title}</Card.Title>[m
[31m-                <Card.Text className="text-muted mb-1">{book.author}</Card.Text>[m
[31m-                <Card.Text className="fw-semibold text-primary">[m
[31m-                  ${book.price.toFixed(2)}[m
[31m-                </Card.Text>[m
[31m-              </Card.Body>[m
[31m-            </Card>[m
[31m-          </Col>[m
[31m-        ))}[m
[31m-      </Row>[m
[31m-    </Container>[m
[31m-    </div>[m
[31m-  );[m
[31m-}[m
[31m-[m
[31m-export default Home;[m
[1mdiff --git a/frontend/src - Copy/reportWebVitals.js b/frontend/src - Copy/reportWebVitals.js[m
[1mdeleted file mode 100644[m
[1mindex 5253d3a..0000000[m
[1m--- a/frontend/src - Copy/reportWebVitals.js[m	
[1m+++ /dev/null[m
[36m@@ -1,13 +0,0 @@[m
[31m-const reportWebVitals = onPerfEntry => {[m
[31m-  if (onPerfEntry && onPerfEntry instanceof Function) {[m
[31m-    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {[m
[31m-      getCLS(onPerfEntry);[m
[31m-      getFID(onPerfEntry);[m
[31m-      getFCP(onPerfEntry);[m
[31m-      getLCP(onPerfEntry);[m
[31m-      getTTFB(onPerfEntry);[m
[31m-    });[m
[31m-  }[m
[31m-};[m
[31m-[m
[31m-export default reportWebVitals;[m
[1mdiff --git a/frontend/src - Copy/setupTests.js b/frontend/src - Copy/setupTests.js[m
[1mdeleted file mode 100644[m
[1mindex 8f2609b..0000000[m
[1m--- a/frontend/src - Copy/setupTests.js[m	
[1m+++ /dev/null[m
[36m@@ -1,5 +0,0 @@[m
[31m-// jest-dom adds custom jest matchers for asserting on DOM nodes.[m
[31m-// allows you to do things like:[m
[31m-// expect(element).toHaveTextContent(/react/i)[m
[31m-// learn more: https://github.com/testing-library/jest-dom[m
[31m-import '@testing-library/jest-dom';[m
[1mdiff --git a/frontend/src - Copy/style/Footer.css b/frontend/src - Copy/style/Footer.css[m
[1mdeleted file mode 100644[m
[1mindex 14d978f..0000000[m
[1m--- a/frontend/src - Copy/style/Footer.css[m	
[1m+++ /dev/null[m
[36m@@ -1,57 +0,0 @@[m
[31m-.footer {[m
[31m-    background-color:rgb(75, 20, 134); [m
[31m-    color: white;[m
[31m-    padding-top: 3rem;[m
[31m-    padding-bottom: 2rem;[m
[31m-    font-size: 1.1rem;[m
[31m-  }[m
[31m-  [m
[31m-  .footer-brand {[m
[31m-    font-size: 2rem;[m
[31m-    font-weight: 700;[m
[31m-    color: #fff;[m
[31m-  }[m
[31m-  [m
[31m-  .footer-desc {[m
[31m-    font-size: 1rem;[m
[31m-    opacity: 0.9;[m
[31m-    margin-top: 10px;[m
[31m-  }[m
[31m-  [m
[31m-  .footer-title {[m
[31m-    font-size: 1.3rem;[m
[31m-    font-weight: 600;[m
[31m-    margin-bottom: 15px;[m
[31m-    color: #f3e8ff;[m
[31m-  }[m
[31m-  [m
[31m-  .footer-links li {[m
[31m-    margin-bottom: 8px;[m
[31m-  }[m
[31m-  [m
[31m-  .footer-links a {[m
[31m-    color: #e2d6ff;[m
[31m-    text-decoration: none;[m
[31m-    transition: color 0.3s ease;[m
[31m-  }[m
[31m-  [m
[31m-  .footer-links a:hover {[m
[31m-    color: red;[m
[31m-  }[m
[31m-  [m
[31m-  .footer-divider {[m
[31m-    border-top: 1px solid rgb(255, 255, 255);[m
[31m-    margin: 25px 0;[m
[31m-  }[m
[31m-  [m
[31m-  .footer-bottom {[m
[31m-    font-size: 1rem;[m
[31m-    opacity: 0.8;[m
[31m-  }[m
[31m-  [m
[31m-  @media (max-width: 768px) {[m
[31m-    .footer {[m
[31m-      text-align: center;[m
[31m-    }[m
[31m-  }[m
[31m-  [m
\ No newline at end of file[m
[1mdiff --git a/frontend/src - Copy/style/NavBar.css b/frontend/src - Copy/style/NavBar.css[m
[1mdeleted file mode 100644[m
[1mindex 1a72fca..0000000[m
[1m--- a/frontend/src - Copy/style/NavBar.css[m	
[1m+++ /dev/null[m
[36m@@ -1,22 +0,0 @@[m
[31m-.custom-navbar {[m
[31m-    background-color: rgb(75, 20, 134);[m
[31m-  }[m
[31m-  [m
[31m-  .custom-navbar .navbar-brand,[m
[31m-  .custom-navbar .nav-link {[m
[31m-    color: white !important;[m
[31m-  }[m
[31m-  [m
[31m-  .custom-navbar .nav-link:hover {[m
[31m-    color: #d9b3ff !important;[m
[31m-  }[m
[31m-[m
[31m-  [m
[31m-   img{[m
[31m-    height: auto;[m
[31m-    width: 100%;[m
[31m-    display: block;[m
[31m-  }[m
[31m-[m
[31m-[m
[31m-  [m
\ No newline at end of file[m
[1mdiff --git a/frontend/src - Copy/style/styles.css b/frontend/src - Copy/style/styles.css[m
[1mdeleted file mode 100644[m
[1mindex 5623f66..0000000[m
[1m--- a/frontend/src - Copy/style/styles.css[m	
[1m+++ /dev/null[m
[36m@@ -1,5 +0,0 @@[m
[31m-.card:hover {[m
[31m-    transform: scale(1.03);[m
[31m-    transition: transform 0.2s ease;[m
[31m-  }[m
[31m-  [m
\ No newline at end of file[m
[1mdiff --git a/frontend/src/components/NavBar.js b/frontend/src/components/NavBar.js[m
[1mindex 220fecc..2c48d26 100644[m
[1m--- a/frontend/src/components/NavBar.js[m
[1m+++ b/frontend/src/components/NavBar.js[m
[36m@@ -8,10 +8,21 @@[m [mfunction NavigationBar() {[m
   const navigate = useNavigate();[m
 [m
   // Get logged-in user from localStorage[m
[31m-  const user = localStorage.getItem("user")[m
[31m-  ? JSON.parse(localStorage.getItem("user"))[m
[31m-  : null;[m
[31m-[m
[32m+[m[32m  // const user = localStorage.getItem("user")[m
[32m+[m[32m  // ? JSON.parse(localStorage.getItem("user"))[m
[32m+[m[32m  // : null;[m
[32m+[m
[32m+[m[32m  let user =null;[m
[32m+[m
[32m+[m[32m  try {[m
[32m+[m[32m    const storedUser = localStorage.getItem("user");[m
[32m+[m[32m    if(storedUser){[m
[32m+[m[32m      user = JSON.parse(storedUser);[m
[32m+[m[32m    }[m
[32m+[m[32m  } catch (err){[m
[32m+[m[32m    console.error("Error parsing user from localStorage:",err);[m
[32m+[m[32m    user=null;[m
[32m+[m[32m  }[m
 [m
   // Logout function (design unchanged)[m
   const handleLogout = () => {[m
[1mdiff --git a/frontend/src/context/booksContext.js b/frontend/src/context/booksContext.js[m
[1mindex cc836c4..541def3 100644[m
[1m--- a/frontend/src/context/booksContext.js[m
[1m+++ b/frontend/src/context/booksContext.js[m
[36m@@ -12,7 +12,7 @@[m [mexport const BooksProvider = ({ children }) => {[m
   // ===============================[m
   const fetchBooks = async () => {[m
     try {[m
[31m-      const res = await axios.get("http://localhost:5000/api/books");[m
[32m+[m[32m      const res = await axios.get(`${process.env.REACT_APP_baseUrl}/api/books`);[m
       // Ensure price & quantity are numbers[m
       const books = res.data.map((b) => ({[m
         ...b,[m
[1mdiff --git a/frontend/src/pages/Admin.js b/frontend/src/pages/Admin.js[m
[1mindex 6b840a6..1e23e2b 100644[m
[1m--- a/frontend/src/pages/Admin.js[m
[1m+++ b/frontend/src/pages/Admin.js[m
[36m@@ -35,7 +35,7 @@[m [mexport default function Admin() {[m
   // ===============================[m
   const fetchBooks = async () => {[m
     try {[m
[31m-      const res = await axios.get("http://localhost:5000/api/books");[m
[32m+[m[32m      const res = await axios.get(`${process.env.REACT_APP_baseUrl}/api/books`);[m
       setBooks(res.data);[m
     } catch (err) {[m
       alert("Failed to fetch books");[m
[36m@@ -52,7 +52,7 @@[m [mexport default function Admin() {[m
   const addBook = async () => {[m
     try {[m
       await axios.post([m
[31m-        "http://localhost:5000/api/books",[m
[32m+[m[32m        `${process.env.REACT_APP_baseUrl}/api/books`,[m
         newBook,[m
         {[m
           headers: { Authorization: `Bearer ${token}` },[m
[36m@@ -83,7 +83,7 @@[m [mexport default function Admin() {[m
 [m
     try {[m
       await axios.delete([m
[31m-        `http://localhost:5000/api/books/${id}`,[m
[32m+[m[32m        `${process.env.REACT_APP_baseUrl}/api/books/${id}`,[m
         {[m
           headers: { Authorization: `Bearer ${token}` },[m
         }[m
[36m@@ -113,7 +113,7 @@[m [mexport default function Admin() {[m
   const saveEdit = async (id) => {[m
     try {[m
       await axios.put([m
[31m-        `http://localhost:5000/api/books/${id}`,[m
[32m+[m[32m        `${process.env.REACT_APP_baseUrl}/api/books/${id}`,[m
         editData,[m
         {[m
           headers: { Authorization: `Bearer ${token}` },[m
[1mdiff --git a/frontend/src/pages/ArabicBooks.js b/frontend/src/pages/ArabicBooks.js[m
[1mindex 0abf2f3..305eea2 100644[m
[1m--- a/frontend/src/pages/ArabicBooks.js[m
[1m+++ b/frontend/src/pages/ArabicBooks.js[m
[36m@@ -10,7 +10,7 @@[m [mfunction ArabicBooks() {[m
 [m
   const fetchBooks = async () => {[m
     try {[m
[31m-      const res = await axios.get("http://localhost:5000/api/books");[m
[32m+[m[32m      const res = await axios.get(`${process.env.REACT_APP_baseUrl}/api/books`);[m
       // Filter only Arabic books and convert price to number[m
       const filtered = res.data[m
         .filter((b) => b.category === "arabic")[m
[1mdiff --git a/frontend/src/pages/Books.js b/frontend/src/pages/Books.js[m
[1mindex b77e612..2df6385 100644[m
[1m--- a/frontend/src/pages/Books.js[m
[1m+++ b/frontend/src/pages/Books.js[m
[36m@@ -11,7 +11,7 @@[m [mfunction Books() {[m
   // Fetch books from backend[m
   const fetchBooks = async () => {[m
     try {[m
[31m-      const res = await axios.get("http://localhost:5000/api/books");[m
[32m+[m[32m      const res = await axios.get(`${process.env.REACT_APP_baseUrl}/api/books`);[m
       // Convert price to number[m
       const booksWithNumbers = res.data.map((b) => ({[m
         ...b,[m
[1mdiff --git a/frontend/src/pages/EnglishBooks.js b/frontend/src/pages/EnglishBooks.js[m
[1mindex e265c7a..086cd36 100644[m
[1m--- a/frontend/src/pages/EnglishBooks.js[m
[1m+++ b/frontend/src/pages/EnglishBooks.js[m
[36m@@ -10,7 +10,7 @@[m [mfunction EnglishBooks() {[m
 [m
   const fetchBooks = async () => {[m
     try {[m
[31m-      const res = await axios.get("http://localhost:5000/api/books");[m
[32m+[m[32m      const res = await axios.get(`${process.env.REACT_APP_baseUrl}/api/books`);[m
       // Filter only English books and convert price to number[m
       const filtered = res.data[m
         .filter((b) => b.category === "english")[m
[1mdiff --git a/frontend/src/services/api.js b/frontend/src/services/api.js[m
[1mindex 7e5fb50..517e411 100644[m
[1m--- a/frontend/src/services/api.js[m
[1m+++ b/frontend/src/services/api.js[m
[36m@@ -1,6 +1,6 @@[m
 // src/services/api.js[m
 [m
[31m-const API_URL = "http://localhost:5000/api";[m
[32m+[m[32mconst API_URL = `${process.env.REACT_APP_baseUrl}/api`;[m
 [m
 // Login user[m
 export const loginUser = async (email, password) => {[m
[36m@@ -131,7 +131,7 @@[m [mexport const deleteBook = async (id) => {[m
 export const createOrder = async (items) => {[m
     const token = localStorage.getItem("token");[m
   [m
[31m-    const res = await fetch("http://localhost:5000/api/orders", {[m
[32m+[m[32m    const res = await fetch(`${process.env.REACT_APP_baseUrl}/api/orders`, {[m
       method: "POST",[m
       headers: {[m
         "Content-Type": "application/json",[m
[36m@@ -157,7 +157,7 @@[m [mexport const createOrder = async (items) => {[m
   export const getMyPurchasedBooks = async () => {[m
     const token = localStorage.getItem("token");[m
   [m
[31m-    const res = await fetch("http://localhost:5000/api/orders/my-books", {[m
[32m+[m[32m    const res = await fetch(`${process.env.REACT_APP_baseUrl}/api/orders/my-books`, {[m
       headers: {[m
         Authorization: `Bearer ${token}`,[m
       },[m

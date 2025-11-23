import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BooksProvider } from './context/booksContext';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import ArabicBooks from './pages/ArabicBooks';
import EnglishBooks from './pages/EnglishBooks';
import PurchasedBooks from './pages/PurchasedBooks';

function App() {
  return (
    <BooksProvider>
    <Router basename="/Web2-project">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/arabic" element={<ArabicBooks />} />
        <Route path="/english" element={<EnglishBooks />} />
        <Route path="/purchased" element={<PurchasedBooks />} />

      </Routes>
      <Footer />
    </Router>
    </BooksProvider> 
  );
}

export default App;

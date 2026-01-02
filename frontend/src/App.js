import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';

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

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";

// Admin route guard
const AdminRoute = ({ children }) => {
  const rawUser = localStorage.getItem("user");
  let user = null;

  try {
    user = rawUser ? JSON.parse(rawUser) : null;
  } catch (error) {
    console.error("Failed to parse user from localStorage:", error);
  }

  if (!user || user.role !== "admin") {
    alert("Access denied: Admins only");
    return <Navigate to="/" />;
  }

  return children;
};

function App() {
  return (
    <BooksProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/arabic" element={<ArabicBooks />} />
        <Route path="/english" element={<EnglishBooks />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

       {/* <Route path="/admin" element={<Admin />} /> */}

        {/* <Route path="/admin" element={<AdminRoute> <Admin /></AdminRoute> }/> */}

        <Route path="/admin" element={
  <AdminRoute>
    <Admin />
  </AdminRoute>
} />


      </Routes>
      <Footer />
    </Router>
    </BooksProvider> 
  );
}

export default App;

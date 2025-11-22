import React, { useContext, useState } from "react";
import { BooksContext } from "../context/booksContext";

export default function Cart() {
  const { cart, addToCart, decreaseQty, removeFromCart, clearCart } = useContext(BooksContext);
  const [purchased, setPurchased] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Your Cart</h2>

      {cart.length === 0 && !purchased && <p>Your cart is empty.</p>}

      {!purchased && cart.map((book, index) => (
        <div key={index} className="d-flex justify-content-between border p-3 mb-3 align-items-center">

          <div>
            <h5>{book.title}</h5>
            <p className="text-muted">{book.author}</p>
            <p>${book.price}</p>

            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-sm btn-secondary" onClick={() => decreaseQty(book.title)}>-</button>
              <span>{book.qty}</span>
              <button className="btn btn-sm btn-secondary" onClick={() => addToCart(book)}>+</button>
            </div>
          </div>

          <button
            className="btn btn-danger"
            onClick={() => removeFromCart(book.title)}
          >
            Remove
          </button>

        </div>
      ))}

      {!purchased && cart.length > 0 && (
        <>
          <h4>Total: ${total.toFixed(2)}</h4>

          <button
            className="btn btn-success w-100 mt-3"
            onClick={() => setPurchased(true)}
          >
            Complete Purchase
          </button>
          
        </>
      )}
      
      {purchased && (
        <div className="mt-5">
          <h3>Thank you for your purchase!</h3>
          <p>Download your books below:</p>

          {cart.map((book, index) => (
            <a
              key={index}
              className="btn btn-primary w-100 mb-2"
              href={book.pdf}
              download
            >
              Download {book.title}
            </a>
          ))}
          
          <button
            className="btn btn-secondary mt-3"
            onClick={() => {
              clearCart();
              setPurchased(false);
            }}
          >
            Back to Shopping
          </button>
          <br></br>
        </div>
      )}
    </div>
  );
}


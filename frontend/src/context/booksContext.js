import React, { createContext, useState } from 'react';
import book1 from '../assets/book1.jpg';
import book2 from '../assets/book2.jpg';
import book3 from '../assets/book3.jpg';
import book4 from '../assets/book4.jpg';
import book5 from '../assets/book5.jpg';
import book6 from '../assets/book6.jpg';
import book7 from '../assets/book7.jpg';
import book8 from '../assets/book8.jpg';
import book9 from '../assets/book9.jpg';
import book10 from '../assets/book10.jpg';
import book11 from '../assets/book11.jpg';
import book12 from '../assets/book12.jpg';
import book13 from '../assets/book13.jpg';
import book14 from '../assets/book14.jpg';


import book18 from '../assets/book18.jpg';
import book19 from '../assets/book19.jpg';
import book20 from '../assets/book20.jpg';
import book21 from '../assets/book21.jpg';
import book22 from '../assets/book22.jpg';
import book23 from '../assets/book23.jpg';


import book26 from '../assets/book26.jpg';
import book27 from '../assets/book27.jpg';
import book28 from '../assets/book28.jpg';
import bookpdf from '../assets/book.pdf';

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [allBooks, setAllBooks] = useState([
    { title: 'كل ازق السماء', author: 'ميليسا دا كوستا', price: 14.50, image: book1, lang: 'ar' ,trend:'yes',pdf:bookpdf},
    { title: 'ارض زيكولا', author: 'عمرو عبد الحميد', price: 11.99, image: book2, lang: 'ar' ,trend:'no',pdf:bookpdf},
    { title: 'ارني انظر اليك', author: 'خولة حمدي', price: 10.99, image: book3, lang: 'ar' ,trend:'no',pdf:bookpdf},
    { title: 'ملحمة الحراشيف', author: 'نجيب محفوظ', price: 9.99, image: book4, lang: 'ar',trend:'yes',pdf:bookpdf },
    { title: 'الف شمس ساطعة', author: 'خالد حسني', price: 10.99, image: book5, lang: 'ar' ,trend:'no',pdf:bookpdf},
    { title: 'ان تبقى', author: 'خولة حمدي', price: 17.99, image: book6, lang: 'ar' ,trend:'no',pdf:bookpdf},
    { title: 'اولاد حارتنا', author: 'نجيب محفوظ ', price: 11.99, image: book7, lang: 'ar' ,trend:'no',pdf:bookpdf},
    { title: 'اين المفر  ', author: 'خولة حمدي', price: 15.99, image: book8, lang: 'ar' ,trend:'no',pdf:bookpdf},
    { title: 'عداء الطائرة الورقية  ', author: 'خالد حسني ', price: 10.99, image: book9, lang: 'ar' ,trend:'no',pdf:bookpdf},
    { title: ' غربة الياسمين ', author: 'خولة حمدي', price: 20.99, image: book10, lang: 'ar' ,trend:'yes',pdf:bookpdf},
    { title: 'في قلبي انثى عبرية  ', author: 'خولة حمدي', price: 18.99, image: book11, lang: 'ar' ,trend:'no',pdf:bookpdf},
    { title: 'قلب الليل  ', author: 'نجيب محفوظ ', price: 16.99, image: book12, lang: 'ar' ,trend:'no',pdf:bookpdf},
    { title: '  ليالي الف ليلة', author: 'نجيب محفوظ ', price: 15.99, image: book13, lang: 'ar' ,trend:'yes',pdf:bookpdf},
    { title: 'وردت الجبال الصدى  ', author: ' خالد حسني', price: 19.99, image: book14, lang: 'ar' ,trend:'no',pdf:bookpdf},

    { title: 'Before I Knew I love you ', author: 'Toshikazo ', price: 12.99, image: book18, lang: 'eng',trend:'no' ,pdf:bookpdf},
    { title: 'Before the coffe gets cold ', author: 'Toshikazo ', price: 10.99, image: book19, lang: 'eng',trend:'no' ,pdf:bookpdf},
    { title: 'It Ends with us ', author: ' colen hover', price: 14.99, image: book20, lang: 'eng',trend:'no',pdf:bookpdf },
    { title: 'The kite runner ', author: ' khaled hosni', price: 11.99, image: book21, lang: 'eng',trend:'no' ,pdf:bookpdf},
    { title: ' The 5 Love language', author: 'Gari Chapman ', price: 18.99, image: book22, lang: 'eng',trend:'no',pdf:bookpdf },
    { title: 'The 100$ startup ', author: 'chris  ', price: 15.99, image: book23, lang: 'eng',trend:'no',pdf:bookpdf },
    { title: ' Cant hurt me', author: '  David Goggins', price: 7.99, image: book27, lang: 'eng',trend:'no' ,pdf:bookpdf},
    { title: ' verity', author: ' collen hover ', price: 12, image: book26, lang: 'eng',trend:'no' ,pdf:bookpdf},
    { title: 'Before the memory fades ', author: 'Toshikazo ', price: 10, image: book28, lang: 'eng',trend:'no',pdf:bookpdf },
  ]); 

  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.title === book.title);
      if (existing) {
        return prev.map((item) =>
          item.title === book.title
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...book, qty: 1 }];
    });
  };

  //  Remove one quantity
  const decreaseQty = (title) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.title === title ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // Remove item completely
  const removeFromCart = (title) => {
    setCart((prev) => prev.filter((item) => item.title !== title));
  };

  //  Clear Cart after purchase
  const clearCart = () => setCart([]);

  return (
    <BooksContext.Provider
      value={{
        allBooks,
        setAllBooks,
        cart,
        addToCart,
        decreaseQty,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}


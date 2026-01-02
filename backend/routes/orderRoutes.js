const express = require("express");
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  getAllOrders,
  getPurchasedBooks,
} = require("../controllers/orderController");

const { authMiddleware, adminMiddleware } = require("../middleware/authMiddleware");

// User routes
router.post("/", authMiddleware, createOrder);
router.get("/my-orders", authMiddleware, getUserOrders);

// Admin routes
router.get("/", authMiddleware, adminMiddleware, getAllOrders);

module.exports = router;

// const { authMiddleware } = require("../middleware/authMiddleware");
// const {
//   createOrder,
//   getPurchasedBooks
// } = require("../controllers/orderController");

router.get("/my-books", authMiddleware, getPurchasedBooks);

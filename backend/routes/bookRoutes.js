const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const { authMiddleware, adminMiddleware } = require("../middleware/authMiddleware");

// Public
router.get("/", getAllBooks);
router.get("/:id", getBookById);

// Admin
router.post("/", authMiddleware, adminMiddleware, createBook);
router.put("/:id", authMiddleware, adminMiddleware, updateBook);
router.delete("/:id", authMiddleware, adminMiddleware, deleteBook);

module.exports = router;

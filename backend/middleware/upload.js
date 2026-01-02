// backend/middleware/upload.js

const multer = require("multer");
const path = require("path");

// Set storage for images and PDFs
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // files go to /backend/uploads
  },
  filename: (req, file, cb) => {
    // Add timestamp to original file name
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Filter file types (optional)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, PNG, PDF allowed."));
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;


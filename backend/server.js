const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({
  origin: '*'
})); 
const path = require("path");
require("dotenv").config();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploads folder (ONLY if you use local images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Backend running on port ${PORT}`);
});

// adminMiddleware.js
// This middleware ensures that only admin users can access certain routes

const jwt = require("jsonwebtoken");

const isAdmin = (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "No token provided" });

    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, "secretkey"); // must match your authController secret

    // Check if user role is admin
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    // Add user info to request
    req.user = decoded;

    next(); // pass to the next middleware / route handler
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = isAdmin;

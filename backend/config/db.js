const mysql = require("mysql2");

const db = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: '',
  database: 'bookstore_db'
});

// const db = mysql.createConnection(process.env.MYSQL_URL);

db.connect(err => {
  if (err) {
    console.error("MySQL connection failed:", err.message);
  } else {
    console.log("MySQL Connected to Local MySQL");
  }
});

module.exports = db;

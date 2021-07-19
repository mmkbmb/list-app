const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "123qweasdzxc",
    database: "list_app"
})

connection.connect((err) => {
    if (err) {
      console.log("err connecting: " + err.stack);
      return;
    }
    console.log("success");
  });

app.get("/mydb", (req, res, next) => {
  const sql = "select * from items"
	connection.query(sql, function (err, result) {
    if (err) {
      next(err) // Pass errs to Express.
    } else {
      res.send(result)
    }
	});
});

app.post("/create", (req, res, next) => {
  connection.query(
    "INSERT INTO items (name) VALUES (?)",
    [req.body.itemName],
    (err, result) => {
      if (err) {
        next(err) // Pass errs to Express.
      } else {
        res.send(result)
      }
    }
  );
});

app.post("/delete", (req, res, next) => {
  connection.query(
    "DELETE FROM items WHERE id = ?",
    [req.body.itemId],
    (err, result) => {
      if (err) {
        next(err) // Pass errs to Express.
      } else {
        res.send(result)
      }
    }
  );
});

app.get("/edit", (req, res, next) => {
	connection.query("select * from items WHERE id = ?", 
  [req.query.itemId],
  (err, result) => {
      if (err) {
        next(err) // Pass errs to Express.
      } else {
        res.send(result)
      }
	});
});

app.post("/update", (req, res) => {
  connection.query(
    "UPDATE items SET name = ? WHERE id = ?",
    [req.body.itemName, req.body.itemId],
    (err, result, next) => {
      if (err) {
        next(err) // Pass errs to Express.
      } else {
        res.send(result)
      }
    }
  );
});

app.listen(process.env.PORT || 3000);
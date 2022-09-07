const mysql = require("mysql");
const dbName = require("./dbName/index");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: dbName,
});

module.exports = db;

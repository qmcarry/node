const express = require("express");

const router = require("./router");
const db = require("./db/mysql");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/jsonp", (req, res) => {
  const data = { name: "zs", age: 201 };
  res.send({
    status: 200,
    msg: "获取数据成功",
    data: data,
  });
});
const cors = require("cors");
app.use(cors());
app.use("/api", router);

app.listen(8080, () => {
  console.log("http://127.0.0.1:8080");
});

const express = require("express");

const router = require("./router");
const db = require("./db/mysql");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//查询
const sqlStr = "select * from users";
// const sqlStr = "select * from sp_user";
db.query(sqlStr, (err, results) => {
  if (err) return console.log(err.message);
  console.log("results", results);
});
//插入
//第一种
const user = { username: "xgfy", password: "xgf1234" };
// const sqlInsert = "insert into users (username,password) values(?,?)";

// db.query(sqlInsert, [user.username, user.password], (err, results) => {
//   if (err) return console.log(err.message);
//   if (results.affectedRows === 1) {
//     console.log("插入成功");
//   }
// });
//第二种
const sqlInsert = "insert into users set ?";
db.query(sqlInsert, user, (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log("插入成功");
  }
});

//更新
//第一种
const user1 = { id: 11, username: "aaa", password: "001" };
// const sqlUpdate = "update users set username=?,password=? where id=?";
// db.query(
//   sqlUpdate,
//   [user1.username, user1.password, user1.id],
//   (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) {
//       console.log("更新成功");
//     }
//   }
// );
//第二种
const sqlUpdate = "update users set ? where id=?";
db.query(sqlUpdate, [user1, user1.id], (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log("更新成功");
  }
});
//删除
const sqlDelete = "delete  from users  where id=?";
db.query(sqlDelete, 7, (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log("删除成功");
  }
});
//标记删除
const sqlUpdatet = "update users set status=? where id=?";

db.query(sqlUpdatet, [1, 1], (err, results) => {
  if (err) return console.log(err.message);
  if (results.affectedRows === 1) {
    console.log("标记删除成功");
  }
});

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

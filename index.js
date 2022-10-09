// import { dotenv } from "dotenv";
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
crypto.randomBytes(64);
const {
  userSignup,
  getRegUsers,
  validateUser,
  authenticateToken,
  createBlog,
  getUsersBlogs,
} = require("./mongoDb/usersController/users");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.post("/api/signup", (req, res) => {
  console.log(req.body);
  userSignup(req.body);
  res.sendStatus(201);
});

app.get("/api/signedup-users", async (req, res) => {
  res.send(await getRegUsers());
});

app.post("/api/login", async (req, res) => {
  const result = await validateUser(req.body);
  if (!result) {
    res.status(403).send({ error: "Authentication failed" });
    return;
  }
  res.send(result);
});

app.post("/api/blog", async (req, res) => {
  console.log(req.body);
  await createBlog(req.body);
  res.json({ Status: "success" });
});

app.get("/api/blog", async (req, res) => {
  res.send(await getUsersBlogs());
});

// app.get("/login", (req, res) => {
//   res.render("pages/login");
// });

// app.post("/blog", async (req, res) => {
//   console.log(req.body);
//   const result = await validateUser(req.body);
//   if (!result) {
//     return res.redirect("/login");
//   }
//   const users = await getRegUsers();
//   res
//     .cookie("access_token", result, {
//       httpOnly: true,
//       secure: false,
//     })
//     .render("pages/blog", { users });
// });

// app.get("/blog", authenticateToken, async (req, res) => {
//   const users = await getRegUsers();
//   console.log(users);
//   res.render("pages/blog", { users });
// });

app.listen(port, () => console.log(`conncted to Database at port ${port}`));

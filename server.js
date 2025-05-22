const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const User = require("./models/User");
const app = express();
const path = require("path");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/userAuth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "MATERIAL-DESIGN", "signup.html"));
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashed });
  await newUser.save();
  res.redirect("signinn.html");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.userId = user._id;
    res.redirect("index.html");
  } else {
    res.send("Invalid email or password");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("signinn.html");
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

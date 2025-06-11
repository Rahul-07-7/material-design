// const express = require("express");
// const mongoose = require("mongoose");
// const session = require("express-session");
// const bcrypt = require("bcryptjs");
// const bodyParser = require("body-parser");
// const User = require("./models/user");
// const app = express();
// const path = require("path");

// mongoose.connect(process.env.MONGODB_URI);

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(
//   session({
//     secret: "secret-key",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "signup.html"));
// });
// app.use(express.static(__dirname));

// app.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;
//   const hashed = await bcrypt.hash(password, 10);
//   const newUser = new User({ name, email, password: hashed });
//   await newUser.save();
//   res.redirect("signinn.html");
// });

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (user && (await bcrypt.compare(password, user.password))) {
//     req.session.userId = user._id;
//     res.redirect("index.html");
//   } else {
//     res.send("Invalid email or password");
//   }
// });

// app.get("/logout", (req, res) => {
//   req.session.destroy(() => {
//     res.redirect("signinn.html");
//   });
// });
// app.get("/api/profile", async (req, res) => {
//   console.log("Session User ID:", req.session.userId); // 👈 check if it's set

//   if (!req.session.userId) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   const user = await User.findById(req.session.userId).select("name email");
//   if (!user) {
//     return res.status(404).json({ error: "User not found" });
//   }

//   res.json(user);
// });

// app.listen(5000, () => console.log("Server running on http://localhost:5000"));

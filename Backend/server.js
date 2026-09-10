const express = require("express");
const { default: mongoose, connect } = require("mongoose");
const { connectMongoDb } = require("./Views/connection");
const Flavors = require("./Model/IceCreamFlavors");
const User = require("./Model/User");
const cors = require("cors");
const userModel = require("./Model/User");
const { setUser, getUser } = require("./services/auth");
const cookieparser = require("cookie-parser");
require("dotenv").config();

const app = express();

connectMongoDb(
  process.env.MONGO_URL || "mongodb://localhost:27017/IceCreamdata",
)
  .then(() => {
    console.log("Connected to:", mongoose.connection.name);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors({ origin: process.env.FRONTEND_URL , credentials: true }));
app.use(express.json());

app.use(cookieparser());

app.get("/api/product", async (req, res) => {
  const flavor = await Flavors.find();

  console.log(flavor);

  if (!flavor) {
    return res.json({ message: "No document found" });
  }

  res.json(flavor);
});

app.get("/", (req, res) => {
  return res.send("hello");
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
    });
    const token = setUser(user);
    res.cookie("uid", token);
    console.log(token);
    res.json({
      msg: "Signup successful",
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
    console.log("signup successful");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "server error",
      error: err,
    });
  }
  console.log(req.body);
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        msg: "User not found",
      });
    }

    if (user.password !== password) {
      return res.json({
        msg: "Wrong password",
      });
    }

    const token = setUser(user);

    res.cookie("uid", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.json({
      msg: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });

  } catch (err) {
    console.error("LOGIN ERROR:", err);

    res.status(500).json({
      msg: "Server error",
    });
  }
});

app.get("/me", async (req, res) => {
  const token = req.cookies.uid;

  if (!token) {
    return res.status(401).json({
      message: "Not logged in",
    });
  }

  const user = getUser(token);

  if (!user) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }

  const dbUser = await User.findById(user.id);

  if (!dbUser) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json({
    msg: "Logged in",
    user: {
      id: dbUser._id,
      name: dbUser.name,
      email: dbUser.email,
    },
  });
});

app.post("/logout", (req, res) => {
  res.clearCookie("uid", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  res.json({
    message: "Logged out successfully",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

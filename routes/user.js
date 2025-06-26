const router = require("express").Router();
const bcrypt = require("bcrypt");
const user = require("../models/user.model");
const jwt = require("jsonwebtoken");

// GET all users (optional route)
router.route("/").get((req, res) => {
  user
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json({ message: "Error: " + err }));
});

// REGISTER route
router.route("/add").post(async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email.toLowerCase();
    const password = await bcrypt.hash(req.body.password, 10);

    const doc = await user.findOne({ email }).exec();
    if (doc) {
      return res.status(400).send({ message: "Account already exists!" });
    }

    const newuser = new user({ name, email, password });
    await newuser.save();
    return res.status(200).send({ message: "User registered successfully!" });
  } catch (err) {
    return res.status(400).send({ message: "Registration failed!" });
  }
});

// LOGIN route
router.route("/login").post(async (req, res) => {
  const email = req.body.email.toLowerCase();
  const password = req.body.password;

  try {
    const doc = await user.findOne({ email }).exec();
    if (!doc) {
      return res.status(400).send({ message: "Invalid credentials!" });
    }

    const passwordCheck = bcrypt.compareSync(password, doc.password);
    if (!passwordCheck) {
      return res.status(400).send({ message: "Invalid credentials!" });
    } else {
      const token = jwt.sign(
        { id: doc._id, email: doc.email },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.setHeader("Access-Control-Expose-Headers", "*");
      res.setHeader("auth-token", token);
      return res.status(200).send({ name: doc.name, message: "Login successful!" });
    }
  } catch (err) {
    return res.status(500).send({ message: "Something went wrong!" });
  }
});

module.exports = router;
import express from "express";
import bodyParser from "body-parser";
import db from "./db.js";
import cors from "cors";
import productRouter from "./routes/product1.js";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import jwt from "jsonwebtoken";

db.connect();

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/products", productRouter);

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const results = await db.query("SELECT * FROM users WHERE username=$1", [
      username,
    ]);
    if (results.rows.length > 0) {
      res.json({ success: false });
    } else {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
          res.status(500).json({ success: false });
        } else {
          const result = await db.query(
            "INSERT INTO users(username, password) VALUES ($1, $2) RETURNING *",
            [username, hash]
          );
          res.json({ success: true });
        }
      });
    }
  } catch (err) {
    console.error("Error during registration:", err);
    res.status(500).json({ success: false });
  }
});

app.post("/cart", async (req, res) => {
  try {
    console.log(req.body.id);
    const result=await db.query(`SELECT ci.id, ci.user_id, ci.product_id, ci.quantity, p.name, p.sp,p.img FROM cart_items AS ci JOIN products AS p ON ci.product_id = p.id WHERE ci.user_id = $1`,[req.body.id]);
    res.json(result.rows);
  } catch (err) {
    console.log(err);
  }
});

passport.use(
  "local",
  new Strategy(async function verify(username, password, cb) {
    try {
      const res = await db.query("SELECT * FROM users WHERE username=$1", [
        username,
      ]);
      if (res.rows.length > 0) {
        const user = res.rows[0];
        const storedHashedPassword = user.password;
        bcrypt.compare(password, storedHashedPassword, (err, isValid) => {
          if (err) {
            console.error("Error comparing passwords:", err);
            return cb(err);
          }
          if (isValid) {
            return cb(null, user);
          } else {
            return cb(null, false, { message: "Incorrect password" });
          }
        });
      } else {
        cb(null, false, { message: "User not found" });
      }
    } catch (err) {
      console.log("Error during authentication:", err);
      cb(err);
    }
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const res = await db.query("SELECT * FROM users WHERE id=$1", [id]);
    done(null, res.rows[0]);
  } catch (err) {
    done(err);
  }
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error("Authentication error:", err);
      return next(err);
    }
    if (!user) {
      return res.json({
        state: false,
        token: null,
      });
    }
    req.logIn(user, (err) => {
      if (err) {
        console.error("Login error:", err);
        return next(err);
      }
      var token = jwt.sign({ id: user.id }, "hell");
      return res.json({
        state: true,
        token: token,
        id: user.id,
      });
    });
  })(req, res, next);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

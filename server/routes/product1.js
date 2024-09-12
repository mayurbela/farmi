import express from "express";
import db from "../db.js";
const router=express.Router();

router.get("/",async(req,res)=>{
    try {
        const {cat}  = req.query;
        if (cat) {
          const results = await db.query("SELECT * FROM products WHERE subcat = $1", [cat]);
          res.json(results.rows);
        } else {
          const dairyAndDeli = await db.query("SELECT * FROM products WHERE cat='dairy&deli'");
          const fruitAndVeg = await db.query("SELECT * FROM products WHERE cat='fruit&veg'");
          res.json({
            d: dairyAndDeli.rows,
            f: fruitAndVeg.rows,
          });
        }
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
      }
    });

export default router;
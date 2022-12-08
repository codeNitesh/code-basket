const express = require("express");
const router = express.Router();
const Basket = require("../models/basket");

router.get("/", async (req, res) => {
  try {
    const baskets = await Basket.find();
    res.json(baskets);
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const basket = await Basket.findById(req.params.id);
    res.json(basket);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  const newBasket = new Basket({
    html: req.body.html,
    css: req.body.css,
    js: req.body.js,
    basketName: req.body.basketName,
  });

  try {
    const basket = await newBasket.save();
    res.json(basket);
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const basket = await Basket.findById(req.params.id);
    basket.css = req.body.css;
    basket.html = req.body.html;
    basket.js = req.body.js;

    const bs = await basket.save();
    res.json(bs);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;

const express = require('express');
const Item = require('../models/Item');

const router = express.Router();

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a menu item
router.post('/', async (req, res) => {
  const item = new Item({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;


const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

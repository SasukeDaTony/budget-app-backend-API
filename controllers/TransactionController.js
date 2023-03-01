const express = require("express");
const app = express.Router();
const transactions = require("../models/transactionsData.js");

//INDEX
app.get("/", (req, res) => {
  res.json(transactions);
});

//SHOW
app.get("/:index", (req, res) => {
  const { index } = req.params;
  if (transactions[index]) {
    res.json(transactions[index]);
  } else {
    res.status(404).json({ error: " error not found" });
  }
});

//CREATE
app.post("/", (req, res) => {
  transactions.push(req.body);
  res.json(transactions[transactions.length - 1]);
});

//DELETE
app.delete("/:index", (req, res) => {
  const { index } = req.params;
  if (transactions[index]) {
    const deletedTransaction = transactions.splice(index, 1);
    res.status(200).json(deletedTransaction);
  } else {
    res.status(400).json({ error: "error not found delete failed" });
  }
});

//UPDATE
app.put("/:index", (req, res) => {
  const { index } = req.params;
  if (transactions[index]) {
    transactions[index] = req.body;
    res.json(transactions[index]);
  } else {
    res.status(400).json({ error: "error not found update failed" });
  }

  res.status(200).json(transactions[index]);
});

module.exports = app;

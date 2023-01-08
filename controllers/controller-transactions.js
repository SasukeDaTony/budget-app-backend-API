const express = require("express");
const transactions = express.Router();
const transactionsData = require("../models/model-transactions.js");

transactions.get("/", (req, res) => {
  res.json(transactionsData);
});

transactions.get("/:index", (req, res) => {
  const { currentIndex } = req.params;
  if (transactionsData[currentIndex]) {
    res.json(transactionsData[currentIndex]);
  } else {
    res
      .status(404)
      .json({ error: "404 error Index does not exist please check again" });
  }
});

transactions.post("/", (req, res) => {
  transactionsData.push(req.body);
  res.json(transactionsData[transactionsData.length - 1]);
});

transactions.delete("/:index", (req, res) => {
  const { currentIndex } = req.params;
  const deletedTransaction = transactionsData.splice(currentIndex, 1);
  res.status(200).json(deletedTransaction);
});

transactions.put("/:index", (req, res) => {
  const { currentIndex } = req.params;
  transactionsData[currentIndex] = req.body;
  res.status(200).json(transactionsData[currentIndex]);
});

module.exports = transactions;

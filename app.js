const cors = require("cors");
const express = require("express");
const controllerTransactions = require("./controllers/TransactionController.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/transactions", controllerTransactions);

app.get("/", (req, res) => {
  res.send("Hello Budget App");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

module.exports = app;

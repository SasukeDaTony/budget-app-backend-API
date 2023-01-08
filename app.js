const express = require("express");
const cors = require("cors");
const app = express();
const controllerTransactions = require("./controllers/controller-transactions.js");

app.use(cors());
app.use(express.json);

app.get("/", (req, res) => {
  res.send("Hello Budget App");
});

app.use("/transactions", controllerTransactions);

app.get("*", (req, res) => {
  res.json({ error: "Page not found" });
});

// app.get("/transactions", (req, res) => {
//   res.send(" list of transactions viewpage");
// });

// app.get("/transactions/:id", (req, res) => {
//   const { id } = req.params;
//   res.send("specific single transaction viewpage");
// });

// app.delete("/transactions/:id", (req, res) => {});

// app.listen(3003, (req, res) => {
//   console.log("listening successfully");
// });

module.exports = app;

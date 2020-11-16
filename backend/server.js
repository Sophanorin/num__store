import express from "express";
import data from "./data.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/products", (req, res) => {
  res.send(data.products);
});

app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});

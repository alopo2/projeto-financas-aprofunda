import express from "express";
import { transactions } from "./data";
import { getTransactionsById } from "./services/transactionsService";
import { createTransactionController } from "./controller/createTransaction";
import { aiResponse } from "./controller/ai";
import { aiResponseChat } from "./controller/aiChat";
import { getProductsController } from "./controller/getProducts";
import { checkoutCreateController } from "./controller/checkoutController";
import { getPurchasesController } from "./controller/purchasesController"; 

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Transactions API v2.5" });
});


app.get("/transactions", (_req, res) => {
  res.json({ transactions });
});


app.get("/transactions/:id", (req, res) => {
  const { id } = req.params;
  const transaction = getTransactionsById(id);
  if (!transaction) {
    return res.status(404).json({ message: "Transação não encontrada" });
  }
  res.json({ transaction });
});


app.post("/transactions", (req, res) => {
  createTransactionController(req, res);
});

app.post("/ai", (req, res) => {
  aiResponse(req, res);
});

app.post("/chat", (req, res) => {
  aiResponseChat(req, res);
});

app.get("/products", (req, res) => {
  getProductsController(req, res);
});

app.post("/checkout", (req, res) => {
  checkoutCreateController(req, res);
});

app.get("/purchases", (req, res) => {
  getPurchasesController(req, res);
});

export default app;

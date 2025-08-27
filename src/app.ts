import express from "express";
import { getTransactionsById, getTransactions } from "./controller/getTransactionsController";
import { createTransactionController } from "./controller/createTransaction";
import { aiResponse } from "./controller/ai";
import { aiResponseChat } from "./controller/aiChat";
import { getProductsApiController } from "./controller/getProducts";
import { checkoutCreateController } from "./controller/checkoutController";
import { getPurchasesController, getPurchasesById } from "./controller/purchasesController"; 

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Transactions API v2.5" });
});


app.get("/transactions", (req, res) => {
  getTransactions(req, res);
});


app.get("/transactions/:id", (req, res) => {
  getTransactionsById(req, res);
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

app.post("/checkout", (req, res) => {
  checkoutCreateController(req, res);
});

app.get("/purchases", (req, res) => {
  getPurchasesController(req, res);
});

app.get("/purchases/:id", (req, res) => {
  getPurchasesById(req, res);
});

app.get("/products", (req, res) => {
  getProductsApiController(req, res);
});

export default app;

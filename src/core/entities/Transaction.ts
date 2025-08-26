import { ObjectId } from "mongoose";

interface ITransaction {
  _id?: ObjectId;
  date: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
}

export class Transaction implements ITransaction {
  _id?: ObjectId;
  date: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;

  constructor(amount: number, description: string, type: "income" | "expense", category: string, _id?: ObjectId) {
    this._id = _id;
    this.amount = amount;
    this.date = new Date().toISOString();
    this.description = description;
    this.type = type;
    this.category = category;
  }
}

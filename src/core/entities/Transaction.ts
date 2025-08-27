export interface ITransaction {
  id?: string;
  date: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
}

export class Transaction implements ITransaction {
  id?: string;
  date: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;

  constructor(
    amount: number,
    description: string,
    type: "income" | "expense",
    category: string,
    id?: string,
    date?: string
  ) {
    this.id = id;
    this.amount = amount;
    this.date = date ?? new Date().toISOString();
    this.description = description;
    this.type = type;
    this.category = category;
  }
}
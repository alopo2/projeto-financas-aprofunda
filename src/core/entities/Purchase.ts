export interface Purchases {
  id?: string;
  date: string;
  total: number;
  items: Array<{
      name: string;
      productId: string;
      quantity: number;
      price: number;
  }>;
}

export class Purchase {
  public readonly id?: string;
  public date: string;
  public total: number;
  public items: Array<{
      name: string;
      productId: string;
      quantity: number;
      price: number;
  }>;

  constructor(date: string, total: number, items: Array<{
      name: string;
      productId: string;
      quantity: number;
      price: number;
  }>, id?: string) {
    this.id = id;
    this.date = date;
    this.total = total;
    this.items = items;
  }
}
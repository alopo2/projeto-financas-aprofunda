import { Purchase } from "../entities/Purchase";

export interface IPurchaseRepository {
  createPurchase(purchase: Purchase): Promise<void>;
  getPurchases(): Promise<Purchase[]>;
  getPurchaseById(id: string): Promise<Purchase | null>;
}

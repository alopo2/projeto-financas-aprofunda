import { IPurchaseRepository } from "../core/repositories/IPurchaseRespository"; 
import { Purchase } from "../core/entities/Purchase";

export class PurchaseService {
    constructor(private repository: IPurchaseRepository) {}

    async createPurchase(purchase: Purchase): Promise<void> {
        await this.repository.createPurchase(purchase);
    }

    async getPurchases(): Promise<Purchase[]> {
        return await this.repository.getPurchases();
    }

    async getPurchasesById(id: string): Promise<Purchase | null> {
        return await this.repository.getPurchaseById(id);
    }
}
import { purchaseModel } from "./mongoosePurchaseModel";
import { Purchase } from "../core/entities/Purchase";

export class MongoPurchaseRepository {
  async getPurchases(): Promise<Purchase[]> {
    const mongoPurchases = await purchaseModel.find();
    return mongoPurchases.map(mongoPurchase => new Purchase(
      mongoPurchase.date,
      mongoPurchase.total,
      mongoPurchase.items,
      mongoPurchase._id.toString()
    ));
  }

  async getPurchaseById(id: string): Promise<Purchase | null> {
    const mongoPurchase = await purchaseModel.findById(id);
    return mongoPurchase ? new Purchase(
      mongoPurchase.date,
      mongoPurchase.total,
      mongoPurchase.items,
      mongoPurchase._id.toString()
    ) : null;
  }

  async createPurchase(purchase: Purchase): Promise<void> {
    const mongoPurchase = new purchaseModel(purchase);
    await mongoPurchase.save();
  }
}

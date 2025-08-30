import { MongoPurchaseRepository } from "../database/mongoPurchaseRepository";
import { PurchaseService } from "../services/purchasesServices";

const mongoPurchaseRepository = new MongoPurchaseRepository();
const purchaseService = new PurchaseService(mongoPurchaseRepository);

export default purchaseService;

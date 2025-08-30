import mongoose, {Schema} from "mongoose";

const purchaseSchema = new Schema({
    date: {type: String, required: true},
    total: {type: Number, required: true},
    items: [{
        name: {type: String, required: true},
        productId: {type: String, required: true},
        quantity: {type: Number, required: true},
        price: {type: Number, required: true}
    }]
});

export const purchaseModel = mongoose.model('Purchase', purchaseSchema)
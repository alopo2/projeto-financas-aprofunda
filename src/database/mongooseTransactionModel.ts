import mongoose, {Schema} from "mongoose";

const transactionSchema = new Schema({
    date: {type: String, required: true},
    description: {type: String, required: true},
    amount: {type: Number, required: true},
    type: {type: String, enum: ["income", "expense"], required: true},
    category: {type: String, required: true},
});

export const transactionModel = mongoose.model('Transaction', transactionSchema)
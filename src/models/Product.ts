import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    unique: true
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  discount_type: {
    type: String,
  },
  discount_max_amount: {
    type: Number,
  },
  tax_rate: {
    type: Number,
  },
  userId: {
    type: String,
  },
});



export default mongoose.model("products", productSchema);

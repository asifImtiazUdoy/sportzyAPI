import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>({
  productId: {
    type: Schema.Types.ObjectId,
    unique: true,
    required: true,
    ref: 'Product'
  },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  paymentMethod: { type: String, required: true }
});

export const Order = model<TOrder>('order', orderSchema);
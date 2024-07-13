import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  category: {
    type: Schema.Types.ObjectId,
    required: [true, 'Category id is required'],
    unique: true,
    ref: 'Category',
  },
  description: { type: String, default: null },
  image: { type: String, default: null },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  stock: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true },
  rating: { type: Number, default: 5 }
});

export const Product = model<TProduct>('product', productSchema);

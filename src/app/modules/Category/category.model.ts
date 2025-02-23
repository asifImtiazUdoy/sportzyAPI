import { Schema, model } from 'mongoose';
import { TCategory } from './category.interface';

const categorySchema = new Schema<TCategory>({
  name: { type: String, required: true },
  image: { type: String, default: null }
});

export const Category = model<TCategory>('category', categorySchema);

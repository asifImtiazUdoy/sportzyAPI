import { Types } from "mongoose";

export type TProduct = {
  name: string;
  category: Types.ObjectId;
  description: string;
  image: string;
  price: number;
  brand: string;
  stock: Number;
  isAvailable: boolean;
  rating: number;
};
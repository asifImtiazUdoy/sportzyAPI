import { Types } from "mongoose";

export type TOrder = {
  productId: Types.ObjectId;
  quantity: number;
  totalPrice: number;
  paymentMethod: string;
};

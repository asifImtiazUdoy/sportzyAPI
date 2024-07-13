import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TOrder } from './order.interface';
import { Order } from './order.model';
import { Product } from '../Product/product.model';

const createOrderIntoDB = async (order: Partial<TOrder>) => {
  const result = await Order.create(order);
  return result;
};

const getUsersAllOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getUsersAllOrdersFromDB
};

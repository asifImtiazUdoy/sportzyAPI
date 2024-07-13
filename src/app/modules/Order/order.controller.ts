import { OrderServices } from './order.services';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.createOrderIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully',
    data: result
  });
});

const getUserAllOrders = catchAsync(async (req, res) => {
  const result = await OrderServices.getUsersAllOrdersFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders retrieved successfully',
    data: result
  });
});

export const OrderControllers = {
  createOrder,
  getUserAllOrders
};

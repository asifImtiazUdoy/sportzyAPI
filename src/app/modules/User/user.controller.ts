import httpStatus from 'http-status';
import config from '../../config';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { verifyToken } from '../Auth/auth.utils';
import { User } from './user.model';
import { UserServices } from './user.services';
import AppError from '../../errors/AppError';

const getUser = catchAsync(async (req, res) => {
  const { user } = req;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User profile retrieved successfully',
    data: user
  });
});

const updateUser = catchAsync(async (req, res) => {
  const { user } = req;
  const userData = req.body;

  const result = await UserServices.updateUserFromDB(
    user.userId,
    userData
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile updated successfully',
    data: result
  });
});

export const UserControllers = {
  getUser,
  updateUser
};
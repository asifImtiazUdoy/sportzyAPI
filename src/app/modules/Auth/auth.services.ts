import httpStatus from 'http-status';
import config from '../../config';
import { User } from '../User/user.model';
import { TLoginUser } from './auth.interface';
import AppError from '../../errors/AppError';
import { IUser } from '../User/user.interface';
import { USER_ROLE } from '../User/user.constant';
import { createToken, verifyToken } from './auth.utils';
import { ObjectId } from 'mongoose';

const signUp = async (payload: IUser) => {
  const userData: Partial<IUser> = payload;
  if (!userData.role) {
    userData.role = USER_ROLE.USER;
  }
  const result = await User.create(userData);
  return result;
};

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByEmail(payload.email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }

  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');
  }

  const jwtPayload = {
    userId: user._id as ObjectId,
    role: user.role as string,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
    user
  };
};

const refreshToken = async (token: string) => {
  // checking if the given token is valid
  const decoded = verifyToken(token, config.jwt_refresh_secret as string);

  const { userId } = decoded;

  // checking if the user is exist
  const user = await User.isUserExists(userId);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  const jwtPayload = {
    userId: user._id as ObjectId,
    role: user.role as string,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
  };
};

export const AuthServices = {
  signUp,
  loginUser,
  refreshToken
};
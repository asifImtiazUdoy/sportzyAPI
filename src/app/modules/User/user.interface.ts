import { Model, ObjectId } from "mongoose";
import { USER_ROLE } from "./user.constant";

export interface IUser {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: 'admin' | 'user';
};

export interface UserStatics extends Model<IUser> {
  isUserExists(id: ObjectId): Promise<IUser>;
  isUserExistsByEmail(email: string): Promise<IUser>;
  isPasswordMatched(plainPassword: string, hashedPassword: string): Promise<boolean>;
}

export type TUserRole = typeof USER_ROLE[keyof typeof USER_ROLE];
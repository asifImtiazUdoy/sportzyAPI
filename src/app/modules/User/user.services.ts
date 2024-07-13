import { User } from "./user.model";
import { IUser } from "./user.interface";

const updateUserFromDB = async (userId: string, user: IUser) => {
  const result = await User.findByIdAndUpdate(userId, user, {
    new: true,
  });

  return result;
};

export const UserServices = {
  updateUserFromDB
};

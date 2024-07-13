import { ObjectId, Schema, model } from 'mongoose';
import { IUser, UserStatics } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<IUser, UserStatics>({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, select: false },
  phone: { type: String, unique: true, required: true },
  address: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'] }
}, {
  timestamps: true
});

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds));
  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

userSchema.statics.isUserExists = async function (id: ObjectId) {
  return await User.findOne({ _id: id }).select('+password');
};

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email: email }).select('+password');
};

userSchema.statics.isPasswordMatched = async function (plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

export const User = model<IUser, UserStatics>('user', userSchema);

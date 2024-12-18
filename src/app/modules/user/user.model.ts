import  bcrypt  from 'bcrypt';


/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import config from '../../config';



export const userSchema = new Schema<TUser , UserModel>(
  {
    id: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      required: true,
    },
    needsPassword: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enam: ['student', 'faculty', 'admin'],
    },
    status: {
      type: String,
      enam: ['in-progress', 'blocked'],
      default:'in-progress'
    },
    isDeleted:{
        type: Boolean,
        default:false
    }
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  const user = this; 
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// set '' after saving password
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

// if cheqe user id exist with instance method or statics 
userSchema.statics.isUserExistsByCustomId = async function (id: string) {
  return await User.findOne({ id }).select('+password');
};


// if cheqe user id exist with instance method or statics 
userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};
export const User = model<TUser,UserModel>("User" , userSchema)

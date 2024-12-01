import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

export const userSchema = new Schema<TUser>(
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

export const User = model<TUser>("User" , userSchema)

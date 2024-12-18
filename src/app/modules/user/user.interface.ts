/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export interface TUser {
    id:string,
    password:string,
    needsPassword:boolean,
    status: 'in-progress' | 'blocked',
    role: 'student' | 'faculty' | 'admin',
    isDeleted: boolean
}

export interface UserModel extends Model<TUser>{
    isUserExistsByCustomId (id:string): Promise<TUser>
}
export interface UserModel extends Model<TUser>{
    isPasswordMatched(planeTextPassword:string ,hashPassword:string): Promise<boolean>
}
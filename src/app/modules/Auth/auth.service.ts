
import jwt from 'jsonwebtoken'

import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import config from '../../config';



const loginUser = async(payload:TLoginUser)=>{
    
    const user =await User.isUserExistsByCustomId(payload.id)
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND , 'User is not found')
    }

    const isDeleted = user?.isDeleted;
    
    if(isDeleted){
        throw new AppError(httpStatus.FORBIDDEN , 'User is deleted')
    }

    const userStatus = user?.status;
    
    if(userStatus ==='blocked'){
        throw new AppError(httpStatus.FORBIDDEN , 'User is blocked')
    }
    

    if(!await User.isPasswordMatched(payload?.password, user?.password)){
        throw new AppError(httpStatus.FORBIDDEN , 'User do not matched')
    }
    
    const jwtPayload = {
        userId : user.id,
        role :user.role
    }
    const accessToken = jwt.sign(jwtPayload ,config.secret_access_token as string ,{expiresIn:'10d'})
    // const result = await User.create(payload)
    return {
        accessToken,
        needsPassword : user.needsPassword
    }
}

export const AuthServices ={
    loginUser
}


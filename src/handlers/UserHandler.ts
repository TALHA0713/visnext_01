import mongoose, { Document } from "mongoose";
import { User as UserType } from "../interfaces/Auth";
import User from "../models/User";

class UserHandler {

  static findUserByEmail(email: string): Promise<any> {
    return User.findOne({ email }).lean()
  }

  static createUser(data: UserType): Promise<any> {
    const user = new User({
      ...data,
      _id: new mongoose.Types.ObjectId()
    })

    return user.save()
  }

  static setAccessToken(userId: string, accessToken: string, refreshToken: string) {

    return User.updateOne({
      _id: new mongoose.Types.ObjectId(userId)
    }, {
      accessToken,
      refreshToken,
    });
  }

  static getAuthenticateUser(userId: string, email = " ", authToken: string): Promise<any> {

    return User.findOne({
      email,
      _id: new mongoose.Types.ObjectId(userId),
      access_token: authToken,
    }).exec()
  }

  static setUserPassword(userId: string, password: string) {

    return User.updateOne({ _id: new mongoose.Types.ObjectId(userId) }, { password })

  }

}

export default UserHandler;

import { Request } from "express";
import mongoose from "mongoose";

export interface User {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  accessToken?: string;
  refreshToken?: string;
}

export interface SignUpRequestBody {
  email: string;
  password: string;
}

export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface UserRequest extends Request {
  user: User
}

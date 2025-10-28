import { ObjectId } from "mongodb";

export interface AuthType {
  _id: ObjectId;
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  profilePicture: string;
  createdAt: string;
  updatedAt: string;
  password?: string; // optional if you don’t return it
}

export interface DataUserList {
  users?: AuthType[];
  page?: number;
  limit?: number;
  totalPages?: number;
  totalUsers?: number;
  error?: string;
}

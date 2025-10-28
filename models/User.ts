import { Document, model, models, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  role: "regular" | "author" | "admin";
  password: string;
  profilePicture: string;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["regular", "author", "admin"], optional: true },
  password: { type: String, required: true },
  profilePicture: { type: String, optional: true },
});

const User = models.User || model<IUser>("User", UserSchema);

export default User;

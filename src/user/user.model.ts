// user.model.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  name: string;
  email: string;
  // Add other user fields as needed...
}

export const UserSchema = new Schema({
  name: String,
  email: String,
  // Define other fields here...
});

export const UserModel = mongoose.model<User>('User', UserSchema);

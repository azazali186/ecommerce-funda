import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id:{
      type: String,
          default: () => uuid.v4().replace(/\-/g, ""), 
     },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, ref: "Roles", required: true },
    roleName: { type: String, ref: "Roles", default: "customer" },
    enableGa: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    accessToken: { type: String }
  },{timestamps:true}, { versionKey: false });

  const userModel = mongoose.model("users", userSchema)

  export default {userModel}
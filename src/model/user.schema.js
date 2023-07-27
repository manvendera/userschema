import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required: [true, 'Name is required'],
    maxLength:[50, 'Name Should be less than 50 character']
  },
  email:{
    type:String,
    unique: true,
  },
  username:{
    type:string,
    unique:true,
  },
  password:{
    type:String,
  }
  ,
  age: Number,
});

export default mongoose.Model("User", userSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:String,
    email:String,
    password:String
})

 const userModel = mongoose.model('Users', userSchema)
 export default userModel
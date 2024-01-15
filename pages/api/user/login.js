import userModel from "@/model/user";
import dbConnect from "@/config/dbConnect";
import bcrypt from "bcrypt"
import { GenAccessToke } from "@/helper/jwt";
import { serialize } from "cookie";
export default async function handler(req, res){
dbConnect()
try {
    const { userName, password } = req.body;
    if (!userName) {
      res.status(400).json({
        success: false,
        message: "Enter userName",
      });
    }
    if (!password) {
      res.status(400).json({
        success: false,
        message: "Enter Password",
      });
    }
    const founduser = await userModel.findOne({ userName: userName });
    if (!founduser) {
      res.status(400).json({
        success: false,
        message: "Invalid Credentiols",
      });
    } else {
      const validatepass = await bcrypt.compare(password, founduser.password);

      if (!validatepass) {
        res.status(400).json({
          success: false,
          message: "Invalid Credentiols",
        });
      } 
const AccessToken = await GenAccessToke({
    id:founduser._id
})
res.setHeader("set-Cookie", serialize("AccessToken",AccessToken,{
    httpOnly:true,
    path:"/",
    secure:true
}))

var user = {id: founduser._id,
name:founduser.name,
email:founduser.email,
userName:founduser.userName,
phone:founduser.phone
}
res.status(200).json({
    success:true,
    message:user
})
    }
  } catch (error) {
    console.log(error);
    if (error.message.split(",")[0]?.split(":")[2]?.trim()) {
      res.status(400).json({
        success: false,
        message: error.message.split(",")[0]?.split(":")[2]?.trim(),
      });
      return;
    }
  }
}
import userModel from "@/model/user";
import dbConnect from "@/config/dbConnect";
import bcrypt from "bcrypt"
export default async function handler(req,res){
    dbConnect()
    try {
        if (!req?.body?.password) {
          res.status(400).json({
            success: false,
            message: "Enter Password",
          });
        }
        const hashpass = await bcrypt.hash(req.body.password, 10);
        const newusername = req.body.userName?.split(" ");
    
        if (newusername?.length >= 2) {
          res.status(400).json({
            success: false,
            message: "Spaces Are Not Allowed",
          });
        }
        const user = await userModel.create({ ...req.body, password: hashpass });
    
        res.status(200).json({
          success: true,
          message: user,
        });
      } catch (error) {
        if (error.code === 11000) {
          if (error.keyPattern?.email) {
            res.status(409).json({
              success: false,
              message: "Email Already in Use!",
            });
          }
          if (error.keyPattern?.phone) {
            res.status(409).json({
              success: false,
              message: "Phone Already in Use!",
            });
          }
          if (error.keyPattern?.userName) {
            res.status(409).json({
              success: false,
              message: "UserName Already in Use!",
            });
          }
          return;
        }
    
        // Required Fields Errors Handling
        if (error.message.split(",")[0]?.split(":")[2]?.trim()) {
          res.status(400).json({
            success: false,
            message: error.message.split(",")[0]?.split(":")[2]?.trim(),
          });
          return;
        }
    
        res.status(500).json({
          success: false,
          message: "Something Went Wrong!",
        });
      }
}
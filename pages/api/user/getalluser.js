import userModel from "@/model/user";
import dbConnect from "@/config/dbConnect";
 
export default async function handler(req,res){
    dbConnect()
    try {
        const allusers = await userModel.find()
        res.status(200).json({
            success:true,
            message:allusers
        })
    } catch (error) {
        console.log(error)
    }
}
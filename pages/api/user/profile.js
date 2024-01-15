import userModel from "@/model/user"
import dbConnect from "@/config/dbConnect"
export default async function handler(req,res){
    dbConnect()
    try {
        var id = JSON.parse(atob(req.cookies.AccessToken.split(".")[1])).id
        const founduser = await userModel.findById(id,{password:false})
        res.status(200).json({
            success:true,
            message:founduser
        })
    } catch (error) {
        console.log(error)
    }
}
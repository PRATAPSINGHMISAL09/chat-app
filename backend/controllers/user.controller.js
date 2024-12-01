import User from "../models/user.model.js";

export const getUsersforSidebar = async (req,res)=>{
    try {
        
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id:{ $ne : loggedInUserId}}).select("-password"); // find all users ne(not including) the loggedin user
        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in getUsersidebar",error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}
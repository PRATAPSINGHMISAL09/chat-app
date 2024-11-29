import User from "../models/user.model.js";

export const signup = async (req,res) =>{
    try {
        const {fullname , username , password , confirmpassword , gender } = req.body;
        if(password !== confirmpassword){
            return res.status(400).json("Passwords do not match");
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json("Username already exists");
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password,
            gender,
            profilepic: gender === 'male' ? boyProfilePic : girlProfilePic
        })

        await newUser.save();

        res.status(201).json({
            _id : newUser._id,
            fullname:newUser.fullname,
            username:newUser.username,
            profilepic : newUser.profilepic
        })

    } catch (error) {
        console.log("Error in signup controller",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }    
}

export const login = (req,res) =>{
    res.send("LoginUser")
    console.log("loginUser");
}

export const logout = (req,res) =>{
    console.log("logoutUser")
}
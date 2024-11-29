import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generatetokenandgetcookie from "../utils/generateToken.js";

//  SIGNUP ENDPOINT
export const signup = async (req,res) =>{

    try {
        const {fullname , username , password , confirmpassword , gender } = req.body; //taking all input fields


        if(password !== confirmpassword){ // confirm both pass are same
            return res.status(400).json("Passwords do not match");
        }


        const user = await User.findOne({username}); //check if the username already exists 
        if(user){
            return res.status(400).json("Username already exists");
        }


        const salt = await bcryptjs.genSalt(12); //hashing the password with salt
        const hashedpassword = await bcryptjs.hash(password,salt); //actually hashing


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`; //random pic api
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;


        const newUser = new User({ //taking inptuts via POST
            fullname,
            username,
            password: hashedpassword,
            gender,
            profilepic: gender === 'male' ? boyProfilePic : girlProfilePic
        })


        if(newUser){ //if there is a new user then.............
        generatetokenandgetcookie(newUser._id,res);
        await newUser.save(); // saving the new user
        
        res.status(201).json({ //new user into the database via endpoint json data details
            _id : newUser._id,
            fullname:newUser.fullname,
            username:newUser.username,
            profilepic : newUser.profilepic
        })
        }
        else{
            res.status(400).json({error:"Invalid user data"});
        }

    } catch (error) {
        console.log("Error in signup controller",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }    
}



//  LOGIN ROUTE
export const login = async (req,res) =>{
    try {
    const {username , password} = req.body; // taking username and pass from body
    const user = await User.findOne({username}); //checking if username is unique
    const isPassword = await bcryptjs.compare(password,user?.password || ""); // checking if password match
    if(!user || !isPassword){
        res.status(400).json("Invalid username or password");
    }

    generatetokenandgetcookie(user._id,res);

    res.status(200).json({
        _id: user._id,
        fullname: user.fullname,
        username: user.username,
        profilepic:user.profilepic
    });

    } catch (error) {
        console.log("Error in login controller",error.message);
        res.status(500).json({error:"Internal Server Error"});
        
    }
}



//  LOGOUT ROUTE
export const logout = (req,res) =>{
    try {
        res.cookie("jwt", "", { maxAge: 0, httpOnly: true, secure: true });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
    console.log("Error in login controller",error.message);
    res.status(500).json({error:"Internal Server Error"});
        
    }
}
export const signup = async (req,res) =>{
    try {
        const {fullname , username , password , confirmpassword , gender } = req.body;
    } catch (error) {
        
    }    
}

export const login = (req,res) =>{
    res.send("LoginUser")
    console.log("loginUser");
}

export const logout = (req,res) =>{
    console.log("logoutUser")
}
import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error in getAllUsers:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { Name, Email,Password } = req.body;
    //check if all the fields are completed
    if(!Name||!Email || !Password){
      return res.status(401).json({msg:"please send all the fields"})
    }
    //check if user exists
    const userExists = await User.findOne({Email});

    if(userExists){
      return res.status(400).json({msg:"user already exists"})
    }
    const hashedPassword =  await bcrypt.hash(Password,10);

    const newUser = await  User.create({ Name, Email,Password:hashedPassword });
   if(newUser){
    res.status(201).json({
      _id:newUser.id,
      Name:newUser.Name,
      Email:newUser.Email,
      token:Generatetoken(newUser.id)
    })
   }
    
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ message: " no user was created"});
  }
};


export const loginuser = async(req,res)=>{
  try {
    const {Email,Password }= req.body;
const user =await  User.findOne({Email});
if(!user){
  return res.status(400).json({msg:"no user registered using this Email-Id"});
}
const isMatch = await bcrypt.compare(Password,user.Password);

  const token = Generatetoken(user.id);
 return res.status(200).json({ msg:"user logged in successfully"},{token});




  } catch (error) {
    
  }
}


const Generatetoken = (id)=>{
  return jwt.sign({id},process.env.JWT_SECRET,{
    expiresIn:'60'
  });
}
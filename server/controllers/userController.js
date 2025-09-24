const User = require('../models/userSchema')
const bcrypt = require('bcryptjs');//To secure password

exports.addUser = async(req,res) => {
    console.log(req.body);
    const {username,email,password} = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        console.log(salt, 'salt');
        
        const hashedPassword = await bcrypt.hash(password,salt);
        console.log(hashedPassword,'hashed');

        const user = new User({name:username,email,password:hashedPassword})
        await user.save()
        res.status(200).json(user)
    } catch (error) {
        console.log(error); 
    } 
}
exports.getUser = async(req,res) => {
    try {
        const user_data = await User.find()
        console.log(user_data);
        // res.status(201).json(user_data)
    } catch (error) {
        console.log(error);
    }
}
exports.updateUser = async(req, res) => {
    try {
        const {id} = req.params
        console.log(id);
        console.log(req.body);
        const user = await User.findById(id)
        const update=await User.findByIdAndUpdate(id,req.body,{new:true})
        console.log(user);
        res.status(201).json(user)
    } catch (error) {
        console.log(error);   
    }  
}
exports.deleteUser = async(req, res) =>{
    try {
        const {id} = req.params
        await User.findByIdAndDelete(id)
        res.status(201).json({message : "user deleted"})
    }
    catch(error) {
        console.log(error);
    }
}

exports.Login = async (req, res) => {
    const {email, password} = req.body;
    console.log(email, password)
    try {
        const user = await User.findOne({email:email});
        console.log(user);
        
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch);
        
        if (!isMatch){
            res.status(400).json({message: "Invalid credentials"});
        }
        else{
            res.status(200).json(user);

        }
    } catch (error) {
        console.log(error)
    }
}
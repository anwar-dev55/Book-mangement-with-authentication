const usersmodel = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


// REGISTER USER
exports.regsiter = async function(req,res) {
    try{
let newUser = new usersmodel(req.body)
const hashedPassword = await bcrypt.hash(req.body.password, 10)
newUser.password = hashedPassword
let user = await newUser.save()
return res.json({message: "User Register Successfuly", user:{email: user.email,name: user.name}})
    }catch{
        console.log("exports.register=function err",err)
        res.status(400).sind({
            message: err
        })
    }
}


// LOGIN USER
exports.login = async function(req,res) {
    try{
let user = await usersmodel.findOne({email: req.body.email})
let comparePassword = await user.comparePassword(req.body.password)
if(!user || !comparePassword){
    res.status(400).send({message: 'Invalid Email or Password' })
}
else{
    const token = jwt.sign({email: user.email, _id:user._id, role: user.role},'secretkey')
    return res.json({message: "User Logged Successfully", user:{email: user.email, name: user.name, jwt: token}})
}

    }catch{
     console.log("exports.login=function err",err)
        res.status(400).sind({
            message: err
        })   
    }
}
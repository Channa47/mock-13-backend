const UserModel = require('../Models/UserModel/userModel')
const express = require('express');

const UserRoute = express.Router();

UserRoute.get('/',async(req,res)=>{
    try{
        let user = await UserModel.find();
        res.send(user);
    }catch(e){
        console.log(e);
        res.send("err")
    }
})

UserRoute.post("/",async(req,res)=>{
    let user = req.body;
    try{
        let newUser = new UserModel(user);
        await newUser.save();
        res.send("done")
    }catch(e){
        console.log(e);
        res.send({msg:e})
    }
})

module.exports = UserRoute


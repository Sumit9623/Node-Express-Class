
const jwt = require('jsonwebtoken');
const User = require('../models/Users').user;
const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt')
exports.signup = async (req,res) =>{
    try{
        // var token = jwt.sign({ email: req.body.email },process.env.SECRET);
        if(req.body.password.length<6){
            res.json({error:"password length is less than 6"});
            return;
        }
        const user = new User(req.body);
        const hash = bcrypt.hashSync(req.body.password,10);
        user.password=hash;
        const result = await user.save()
        if(result) {
            res.sendStatus(201)
            console.log("User created Successfully");
        }
    }
    catch(err) {res.status(404).json(err)}
}

exports.login = async (req,res) =>
{
    try{
        const user = await User.findOne({email:req.body.email});
        const isauth = await bcrypt.compare(req.body.password,user.password);
        if(isauth && user)
        {
            const privatekey = fs.readFileSync(path.resolve(__dirname,'../private.key'),'utf-8');
            var token = jwt.sign({ email: req.body.email },privatekey,{algorithm:'RS256'});
            user.token=token;
            const result = await user.save();
            if(result) {
                res.status(201).json({token})
            }
        }
        else{
            res.sendStatus(401);
        }
    }
    catch(err) {
        res.sendStatus(401);
    }
}
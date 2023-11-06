
// const fs = require('fs');
const User = require('../models/Users').user;

exports.getAllUsers= async(req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err)
    {
        res.status(400).json(err);
    }
}

exports.getOneUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id).populate('Cart');
    res.json(user);
};

exports.replaceUser = async (req, res) => {
    const id = req.params.id;
    try{
    const doc = await User.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(201).json(doc);
    }
    catch(err){
      console.log(err);
      res.status(400).json(err);
    }
  };
  exports.changeUser = async (req, res) => {
    const id = req.params.id;
    try{
    const doc = await User.findOneAndUpdate({_id:id},req.body,{new:true})
    res.status(201).json(doc);
    }
    catch(err){
      console.log(err);
      res.status(400).json(err);
    }
  };
  exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try{
    const doc = await User.findOneAndDelete({_id:id})
    res.status(201).json(doc);
    }
    catch(err){
      console.log(err);
      res.status(400).json(err);
    }
  };


// ****************************************  Old Method by reading Dummy.json file **************************************************************************


// const data = JSON.parse(fs.readFileSync('Dummy.json','utf-8'));
// const users = data.users;

// exports.getAllUsers=(req,res)=>{
//     console.log(users);
//     res.json(users);
// }

// exports.getOneUser = (req,res)=>{
//     const id = +req.params.id;
//     const user = users.find(p=>p.id===id);
//     res.json(user);
// }

// exports.postUser = (req,res)=>{
//     console.log(req.body);
//     users.push(req.body);
//     res.send("data Submitted");
// }

// exports.replaceUser = (req,res)=>{
//     const user_id = +req.params.id;
//     const user_index = users.findIndex((p)=>{return p.id===user_id});  // finding index of given user in array
//     users.splice(user_index,1,{...req.body,id:user_id});               // updating array by removing 1 element form that index and add 1 new element in that position
//     res.status(200).json({type:"put"});
// }

// exports.changeUser = (req,res)=>{
//     const user_id = +req.params.id;
//     const user_index = users.findIndex((p)=>{return p.id===user_id});  // finding index of given user in array
//     const user = users[user_index];
//     users.splice(user_index,1,{...user,...req.body});
//     res.status(200).json({Type:"patch"});
// }

// exports.deleteUser = (req,res)=>{
//     const id = +req.params.id;
//     const user_index = users.findIndex((p)=>{return p.id===id});
//     users.splice(user_index,1);
//     res.status(200).json({type:"Delete"});
// }


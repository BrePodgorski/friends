let mongoose = require('mongoose');
let Friend = mongoose.model('Friend');

module.exports = {
  addFriend: (req, res)=>{
    let friend = new Friend(req.body);
    //creating new friend
    console.log("bye")
    //saved friend is being assigned here as a new variable, assumed because it's passing in friend
    friend.save((err, savedFriend) => {
      //save function takes a callback that has two arguments
      //arg 1 - errors the db is sending back if there is a problem saving
      //arg 2 - instance of object we just saved (the friend)
      if(err){
        console.log(err);
        return res.status(500).send("Error saving friend")
      }else{
        // return res.status(200).send("cool");
        return res.json(savedFriend);
        //referring to... what we pass into this function on front end
        //returning a full object because we are adding a new friend
      }
    })
  },
  getAllFriends: (req,res)=>{
    //find takes new arguments
    //arg 1 => query or search parameters
    //arg 2 => is the callback
    console.log("hi")
    Friend.find({},(err, friends) => {
      if(err){
        console.log(err);
        return res.status(500).send("Error getting friend")
      }else{
        console.log(friends);
        // return res.status(200).send("cool");
        return res.json(friends);
      }
    })
  },
  deleteFriend: (req,res)=>{
    Friend.remove({_id: req.params.id}, (err, data)=>{
      //getting data passed in
      if(err){
        console.log(err);
        return res.status(500).send("Error deletingfriend")
      }else{
        // console.log(data);
        // return res.status(200).send("cool");
        return res.json(data);
      }
    })
  },
  getSingleFriend: (req,res)=>{
    Friend.findOne({_id: req.params.id}, (err, friend)=>{
      if(err){
        console.log(err);
        return res.status(500).send("Error finding friend")
      }else{
        // console.log(data);
        // return res.status(200).send("cool");
        return res.json(friend);
      }
    })
  },

  updateFriend:(req,res)=>{
    Friend.update({_id: req.body._id}, req.body, (err, result)=>{
      //taking in the new data we are inputting
      if(err){
        console.log(err);
        return res.status(500).send("Error updating friend")
      }else{
        // console.log(data);
        // return res.status(200).send("cool");
        return res.json(result);
      }
    })
  }
}

//from component to service to routes.js to controller.js

  //finding friends, having it send or retyrn an erro

  //defining function from routes and service

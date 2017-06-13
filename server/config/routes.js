var controller = require('./../controllers/controller');
module.exports = app => {
  app.post('/api/friends', controller.addFriend);
  //controller method, similar to front end
  //coming from the form
  app.get('/api/friends', controller.getAllFriends);
  //getting everything from the api
  //once it hits this, it will execute this function
  app.delete('/api/friends/:id', controller.deleteFriend);
  //finding the frined by id and executing delete function
  app.get('/api/friends/:id', controller.getSingleFriend);
  app.put('/api/friends', controller.updateFriend);
  //takes existing and replaces it
}
//from component to service to routes.js to controller.js

// syntax for javascript require or importing a different file

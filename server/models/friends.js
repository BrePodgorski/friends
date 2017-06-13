let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let FriendSchema = new Schema({
  first_name: {type:String, required:  true},
  last_name: {type:String, required:  true},
  birthday: {type:Date, required:  true},
}, {timestamps:true})

//models, like in Django
mongoose.model('Friend', FriendSchema);

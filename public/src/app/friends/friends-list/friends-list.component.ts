import { Component, OnInit } from '@angular/core';
//import service
import { FriendsService } from './../friends.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {
  friends: Array<any>;
  //creating array for friends to show
  constructor(private _friendsService:FriendsService) { }
  //creating a privte constructor for service

  ngOnInit() {
    this.compononentGetAllFriends();
    //like upon load
  }
  //each function corresponds with what it's supposed to do
  compononentGetAllFriends(){
    this._friendsService.serviceGetAllFriends()
    //creating a function to show all friends
    .then((friendsFromServer)=> this.friends = friendsFromServer)
    .catch((err)=> console.log(err))
    //finding it or catching errors
  }
  deleteFriendInComponent(theUserIdFromTheTable){
    //this happens from the list page so it must be defined here
    //above is the id
    this._friendsService.deleteFriendInService(theUserIdFromTheTable)
    //any time defining something here, throw it to the serviceGetAllFriends
    .then((response)=>{
      console.log(response);
      this.compononentGetAllFriends();
      //reloading document
    })
    .catch((err)=>console.log("There error is", err))

  }
  //any time defined or a function is needed somewhere, you must place it in here

}

import { Component, OnInit } from '@angular/core';
//import service
import { FriendsService } from './../friends.service';
//import router
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends-show',
  templateUrl: './friends-show.component.html',
  styleUrls: ['./friends-show.component.css']
})
export class FriendsShowComponent implements OnInit {
  //We are displaying the whole array. Must define friend
  friend: any;
  //define what friend is
  friend_id: String;
  constructor(private _friendsService:FriendsService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((param)=>{
      //when somethign changes, this page is notified
      this.friend_id = param.id;
    })
    this.componentGetSingleUser(this.friend_id)
    //this will exectute as soon as page loads

  }
  //these are called because from this page, we need to be able to get single uses to observe and to edit
  //the observable
  componentGetSingleUser(theIdFromTheUrl){
    //naming the ids in a way that they are recognizable
    this._friendsService.serviceGetSingleUser(theIdFromTheUrl)
    //serviceGetSingleUser taking in id from service from component
    .then((friendFromServer)=> this.friend = friendFromServer)
    .catch((err)=> console.log(err))

  }

}
//component.ts FIRST, then to service

//MAKE SURE that children are within parent

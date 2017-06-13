import { Component, OnInit } from '@angular/core';
import { FriendsService } from './../friends.service';
//import router
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends-edit',
  templateUrl: './friends-edit.component.html',
  styleUrls: ['./friends-edit.component.css']
})
export class FriendsEditComponent implements OnInit {
    friend: any;
  //define what friend is
    friend_id: String;
  constructor(private _friendsService:FriendsService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((param)=>{
      this.friend_id = param.id;
      //remembering what we do to this and notifying everythign when it happens
    })
    this.componentGetSingleUser(this.friend_id)
    //this will exectute as soon as page loads

  }
  //the observable
  componentGetSingleUser(theIdFromTheUrl){
    this._friendsService.serviceGetSingleUser(theIdFromTheUrl)
    .then((friendFromServer)=> this.friend = friendFromServer)
    .catch((err)=> console.log(err))

  }
  updateFriendInEditComponent(){
    this._friendsService.updateFriendInService(this.friend)
    .then( () => this._router.navigate(['/list']))
    .catch((err)=> console.log(err))
  }

}

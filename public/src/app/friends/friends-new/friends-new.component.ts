import { Component, OnInit } from '@angular/core';
import { FriendsService } from './../friends.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends-new',
  templateUrl: './friends-new.component.html',
  styleUrls: ['./friends-new.component.css']
})
export class FriendsNewComponent implements OnInit {

  constructor(private _friendsService:FriendsService, private _router: Router) { }
  //this will allow us to run all the service methods
  //include routing to have them talk to each other

  ngOnInit() {
  }
  //creating the function from the form to correspond
  addFriendInNewComponent(formData){
    this._friendsService.addFriendInService(formData.value)
    //defining new function while inputting existing from service and data from form
    
    //.then takes in callback with one arg. the data response from server
      .then((response) => {
        console.log(response)
        //adding router navigation
        this._router.navigate(['/list'])
      })

      .catch((err)=> console.log(err) )
      //these methods are being chained, like querying
    formData.reset()
  }

}
//promises are callbacks that will have two possibled results, successful or unsuccessful

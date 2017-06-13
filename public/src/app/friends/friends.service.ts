import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//must load data type response
import 'rxjs';
//import the above

@Injectable()
export class FriendsService {
//every new function we call will need to pass through the service to be translated correctly

  constructor(private _http: Http) { }
  //make sure to include this instructor bringing int data from http
  addFriendInService(friendObjectFromComponent){
    //after adding friends new component
    //this allows us to access all the methods within the http modules
    //post method takes in two arguments, 1. the url to send the request to, 2. the form data
    return this._http.post('/api/friends', friendObjectFromComponent)
    //the above line is dealing with the outgoing request, the line below is dealing with incoming request => map takes in callback
    .map( (responseFromTheServer: Response ) => responseFromTheServer.json())
    //response from controller
    .toPromise()


    //this allows us to access all the methods within the http modules
    //post method takes in two arguments, 1. the url to send the request to, 2. the form data
  }
  serviceGetAllFriends(){
    //the get method only takes in url

    return this._http.get('/api/friends')
    .map( (responseFromTheServer: Response ) => responseFromTheServer.json())
    //response from controller
    .toPromise()
  }
  deleteFriendInService(theFriendIdFromTheComponent){
    return this._http.delete('/api/friends/' + theFriendIdFromTheComponent)
    //input from component
    .map( (responseFromTheServer: Response ) => responseFromTheServer.json())
    //outputting response from controller
    .toPromise()
  }
  //from component to service to routes.js
  serviceGetSingleUser(theFriendIdFromTheComponent){
    return this._http.get('/api/friends/' + theFriendIdFromTheComponent)
    .map( (responseFromTheServer: Response ) => responseFromTheServer.json())
    //response from controller
    .toPromise()
  }
  //from controller
  updateFriendInService(updatedFriendFromEditComponent){
    return this._http.put('/api/friends', updatedFriendFromEditComponent)
    .map( (responseFromTheServer: Response ) => responseFromTheServer.json())
    //response from controller
    .toPromise()
  }
}
//the ids have different names, keep them name the same

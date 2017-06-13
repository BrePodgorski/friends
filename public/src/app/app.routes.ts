import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
//import parent
import { FriendsComponent } from './friends/friends.component';
//must import children
import { FriendsListComponent } from './friends/friends-list/friends-list.component';
import { FriendsNewComponent } from './friends/friends-new/friends-new.component';
import { FriendsEditComponent } from './friends/friends-edit/friends-edit.component';
import { FriendsShowComponent } from './friends/friends-show/friends-show.component';
//this is home base for routes, so all need to be added on here to work

const APP_ROUTES: Routes = [
  { path: '', component: FriendsComponent, children:[
    //inserting children paths
    {path: 'list', component: FriendsListComponent},
    //all corresponds to components 
    {path: 'new', component: FriendsNewComponent},
    {path: 'edit/:id', component: FriendsEditComponent},
    {path: 'show/:id', component: FriendsShowComponent}
  ] },

];
//use children when possible in order to connect everything together
export const routing = RouterModule.forRoot(APP_ROUTES);


//importing routes, and where things will be directed based on what's typed in

import { HomeComponent } from './views/home/home.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserDeleteComponent } from './components/users/user-delete/user-delete.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserCardComponent } from './views/user-card/user-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [ {
  path: "",
  component: HomeComponent
},
{
path: "userAccount",
component: UserCardComponent
},
{
  path: "userAccount/createuser",
  component: UserCreateComponent
  }
  ,
{
  path: "users",
  component: UserListComponent
  },
  {
    path: "userAccount/user-update/:userId",
    component: UserUpdateComponent
  },
  {
    path: "userAccount/user-delete/:userId",
    component: UserDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

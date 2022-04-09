import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LogInComponent} from "./log-in/log-in.component";
import {ContactComponent} from "./contact/contact.component";
import {Router} from "./routing/router";
import {SignUpComponent} from "./sign-up/sign-up.component";


const routes: Routes = [
  { path: Router.HOME,
    component: HomeComponent},
  { path: Router.LOGIN,
    component: LogInComponent},
  { path: Router.CONTACT,
    component: ContactComponent},
  { path: Router.SIGNUP,
    component: SignUpComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

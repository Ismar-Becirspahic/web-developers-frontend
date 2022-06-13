import { Component, OnInit } from '@angular/core';
import {Route} from "../../routing/route";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public homeRoute = Route.HOME;
  public contactRoute = Route.CONTACT;
  public logInRoute = Route.LOGIN;
  public projectRoute = Route.PROJECTS;
  public profileRoute = Route.PROFILE;
  constructor(public authService: AuthService) {
  }


}

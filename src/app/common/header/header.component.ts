import { Component, OnInit } from '@angular/core';
import {Route} from "../../routing/route";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public homeRoute = Route.HOME;
  public contactRoute = Route.CONTACT;
  public logInRoute = Route.LOGIN;

}

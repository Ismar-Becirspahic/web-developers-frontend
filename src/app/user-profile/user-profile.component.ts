import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {AppUser} from "../model/app-user.model";
import {UserService} from "../service/user-service";
import {ActivatedRoute} from "@angular/router";
import {AppResponse} from "../routing/app-response";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user : AppUser | undefined;
  constructor(private userService: UserService, private activatedRoute : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.user = response[AppResponse.PERSON];
    });
  }

}

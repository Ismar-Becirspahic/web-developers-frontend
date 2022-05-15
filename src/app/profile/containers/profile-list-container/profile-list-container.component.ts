import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Route} from "../../../routing/route";
import {ProfileModel} from "../../../model/profile-model";
import {ProfileService} from "../../../service/profile-service.service";
import {ProfileResponse} from "../../../routing/profile-response";


@Component({
  selector: 'app-profile-list-container',
  templateUrl: './profile-list-container.component.html',
  styleUrls: ['./profile-list-container.component.css']
})


export class ProfileListContainerComponent implements OnInit {

  public profiles: ProfileModel[] = [];

  constructor(private activatedRoute:ActivatedRoute, private profileService:ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.profiles = response[ProfileResponse.PROFILE];
    });
  }

}

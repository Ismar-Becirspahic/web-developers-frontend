import { Component, OnInit } from '@angular/core';
import {ProjectResponse} from "../../../routing/project-response";
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../../../model/project.model";
import {ProjectService} from "../../../service/project.service";
import {Route} from "../../../routing/route";
import {ProfileModel} from "../../../model/profile-model";
import {ProfileService} from "../../../service/profile-service.service";
import {ProfileResponse} from "../../../routing/profile-response";


@Component({
  selector: 'app-profile-view-container',
  templateUrl: './profile-view-container.component.html',
  styleUrls: ['./profile-view-container.component.css']
})

export class ProfileViewContainerComponent implements OnInit {


  public profile: ProfileModel | undefined;

  constructor(private activatedRoute: ActivatedRoute, private profileService:ProfileService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.profile = response[ProfileResponse.PROFILE];
    });

  }
  removeProfile(id: string) {
    this.profileService.deleteProfile(id).subscribe(value => {
      this.router.navigate([Route.PROFILES]);
    });
  }
}


import { Component, OnInit } from '@angular/core';
import {ProfileModel} from "../../../model/profile-model";
import {ProfileResponse} from "../../../routing/profile-response";
import {ProfileInfoEnum} from "../../../model/profile-info.enum";
import {Route} from "../../../routing/route";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileService} from "../../../service/profile-service.service";
import {profileDatabase} from "../../../database/profileDatabase";


@Component({
  selector: 'app-profile-form-container',
  templateUrl: './profile-form-container.component.html',
  styleUrls: ['./profile-form-container.component.css']
})

export class ProfileFormContainerComponent implements OnInit {

  public profile: ProfileModel | undefined;

  private isEditing: boolean = false;
  private profiles: ProfileModel[] = profileDatabase;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService,
  ) {
  }

  ngOnInit(): void {
    this.isEditing = this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path === Route.EDIT;
    if (this.isEditing) {
      this.activatedRoute.data.subscribe((response: any) => {
        this.profile = response[ProfileResponse.PROFILE];
      });
    }
  }

  saveProfile(profile: ProfileModel): void {
    if (this.isEditing) {
      const existingIndex = this.profiles.findIndex(i => i[ProfileInfoEnum.id] === profile[ProfileInfoEnum.id]);
      this.profiles.splice(existingIndex, 1, profile);
      this.router.navigate([Route.PROFILES]);
    } else {
      this.profileService.addProfile(profile).subscribe(value => {
        this.router.navigate([Route.PROFILES]);
      });
    }
  }
}


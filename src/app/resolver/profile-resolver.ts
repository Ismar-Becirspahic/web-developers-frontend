import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProfileModel} from '../model/profile-model';
import {Route} from '../routing/route';
import {ProfileService} from "../service/profile-service.service";

@Injectable({providedIn: 'root'})
export class ProfileResolver implements Resolve<ProfileModel> {

  constructor(private profileService:ProfileService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProfileModel> | Promise<ProfileModel> | ProfileModel {
    const id = route.paramMap.get(Route.ID.substring(1));
    const profile = this.profileService.getProfile(id!);
    if(!profile) {
      throw 'Profile not found!';
    }
    return profile;
  }
}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProfileModel} from '../model/profile-model';
import {ProfileService} from "../service/profile-service.service";

@Injectable({providedIn: 'root'})
export class ProfilesResolver implements Resolve<ProfileModel[]> {

  constructor(private profileService:ProfileService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProfileModel[]> | Promise<ProfileModel[]> | ProfileModel[] {
    return this.profileService.getProfiles();
  }
}

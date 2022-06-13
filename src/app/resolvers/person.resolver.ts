import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs';
import {AppUser} from "../models/app-user.model";
import {UserService} from "../services/user-service";


@Injectable({providedIn: 'root'})
export class PersonResolver implements Resolve<AppUser> {

  constructor(private userService: UserService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<AppUser> | Promise<AppUser> | AppUser {
    const user = this.userService.getUser();
    if (!user) {
      throw "User not found";
    }
    return user;
  }
}

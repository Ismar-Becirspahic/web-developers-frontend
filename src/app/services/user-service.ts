import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {mergeMap, Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {Route} from "../routing/route";
import {AppUser} from "../models/app-user.model";
import {AuthResponse} from "../models/auth-response.model";
import {Project} from "../models/project.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl: string = `${environment.backendUrl}/profile`;
  constructor(private http: HttpClient) {}

  public getUser():Observable<AppUser> {
    return this.http.get<AppUser>(this.baseUrl);
  }
  public editUser(user:AppUser, id:string):Observable<AppUser> {
    return this.http.put<AppUser>(`${this.baseUrl}/${id}`, user);
  }

}

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {mergeMap, Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {Route} from "../routing/route";
import {AppUser} from "../model/app-user.model";
import {AuthResponse} from "../model/auth-response.model";
import {Project} from "../model/project.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl: string = `${environment.backendUrl}/profile`;
  constructor(private http: HttpClient) {}

  public getUser():Observable<AppUser> {
    return this.http.get<AppUser>(this.baseUrl);
  }
  public editProject(user:AppUser, id:string):Observable<AppUser> {
    return this.http.put<AppUser>(`${this.baseUrl}/${id}`, user);
  }

}

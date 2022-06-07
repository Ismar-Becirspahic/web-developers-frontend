import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AppUser} from "../model/app-user.model";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private readonly baseUrl: string = `${environment.backendUrl}/sign-up`;

  constructor(private http:HttpClient) {
  }

  public createUser(appUser: AppUser):Observable<AppUser> {
    return this.http.post<AppUser>(`${this.baseUrl}`, appUser);
  }
  public getUsers():Observable<AppUser[]> {
    return this.http.get<AppUser[]>(`${this.baseUrl}`);
  }
}

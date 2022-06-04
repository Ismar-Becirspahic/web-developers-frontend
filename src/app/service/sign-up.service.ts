import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AppUserModel} from "../model/appUser-model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private readonly baseUrl: string = `${environment.backendUrl}/sign-up`;

  constructor(private http:HttpClient) {
  }

  public createUser(appUser: AppUserModel):Observable<AppUserModel> {
    return this.http.post<AppUserModel>(`${this.baseUrl}`, appUser);
  }
  public getUsers():Observable<AppUserModel[]> {
    return this.http.get<AppUserModel[]>(`${this.baseUrl}`);
  }
}

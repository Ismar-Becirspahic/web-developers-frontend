import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProfileModel} from "../model/profile-model";

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  private readonly baseUrl: string = "http://localhost:8080/profile";

  constructor(private http:HttpClient) {
  }

  public getProfiles():Observable<ProfileModel[]> {
    return this.http.get<ProfileModel[]>(this.baseUrl);
  }

  public getProfile(id:string):Observable<ProfileModel> {
    return this.http.get<ProfileModel>(`${this.baseUrl}/${id}`);  }

  public addProfile(profile:ProfileModel):Observable<ProfileModel> {
    return this.http.post<ProfileModel>(`${this.baseUrl}`, profile);
  }

  public deleteProfile(id:string):Observable<ProfileModel> {
    return this.http.delete<ProfileModel>(`${this.baseUrl}/${id}`);
  }

}

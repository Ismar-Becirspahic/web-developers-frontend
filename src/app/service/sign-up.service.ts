import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {SignInForm} from "../model/sign-in-form.interface";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private readonly baseUrl: string = `${environment.backendUrl}/sign-up`;

  constructor(private http:HttpClient) {
  }

  public createUser(appUser: SignInForm):Observable<SignInForm> {
    return this.http.post<SignInForm>(`${this.baseUrl}`, appUser);
  }
  public getUsers():Observable<SignInForm[]> {
    return this.http.get<SignInForm[]>(`${this.baseUrl}`);
  }
}

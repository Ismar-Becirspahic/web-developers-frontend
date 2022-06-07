import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {mergeMap, Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {Route} from "../routing/route";
import {AppUser} from "../model/app-user.model";
import {AuthResponse} from "../model/auth-response.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl: string = `${environment.backendUrl}/authenticate`;

  private jwt: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  public getToken(): string | null {
    return this.jwt;
  }

  public logIn(signInForm: AppUser): Observable<void> {
    const body = {
      username: signInForm.username,
      password: signInForm.password,
    };

    return this.http.post<AuthResponse>(`${this.baseUrl}`, body).pipe(
      mergeMap(response => {
        this.jwt = response.token;
        return of(undefined);
      })
    );
  }
  loggedIn(){
    return !!this.jwt;
  }


  public goToLogin():void {
    this.router.navigate([Route.LOGIN]);
  }
}

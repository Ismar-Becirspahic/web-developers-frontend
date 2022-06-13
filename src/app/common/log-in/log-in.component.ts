import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Route} from "../../routing/route";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public loginForm!: FormGroup;
  hide: boolean = false;

  constructor(private fb: FormBuilder, private authService : AuthService, private router : Router) {

  }

  ngOnInit(): void {
    this.loginForm= this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }



  onLogin() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this.authService.logIn({ ...this.loginForm.value }).subscribe(() => {
        alert("Logged in successfully")
        this.router.navigate([Route.PROFILE]);
      });
    }
  }



}

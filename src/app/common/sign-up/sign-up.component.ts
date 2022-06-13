import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {SignUpService} from "../../services/sign-up.service";
import {Router} from "@angular/router";
import {Route} from "../../routing/route";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  public loginForm!: FormGroup;
  hide: boolean = false;

  constructor(private fb: FormBuilder,private signUpService : SignUpService, private router : Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });}

  public post(): void {

      this.signUpService.createUser(this.loginForm.value)
        .subscribe({
          next: (res) => {
            alert("Signed up successfully");
            this.router.navigate([Route.LOGIN])
          },
          error: () => {
          }
        })
    }



}

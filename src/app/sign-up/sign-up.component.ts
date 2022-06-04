import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {SignUpService} from "../service/sign-up.service";
import {AppUserInfoEnum} from "../model/appUser-info.enum";
import {AppUserModel} from "../model/appUser-model";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Output()
  saveProfile: EventEmitter<AppUserModel> = new EventEmitter<AppUserModel>();
  @Input()
  appUser: AppUserModel | undefined;

  public loginForm!: FormGroup;
  hide: boolean = false;

  constructor(private fb: FormBuilder,private signUpService : SignUpService) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [this.appUser?.[AppUserInfoEnum.username] || '', Validators.required],
      email: [this.appUser?.[AppUserInfoEnum.email] || '', Validators.required],
      password: [this.appUser?.[AppUserInfoEnum.password] || '', Validators.required, Validators.minLength(6)],

    });}

  public post(): void {

      this.signUpService.createUser(this.loginForm.value)
        .subscribe({
          next: (res) => {
            alert("Signed up successfully");
            this.loginForm.reset();
          },
          error: () => {
          }
        })
    }



}

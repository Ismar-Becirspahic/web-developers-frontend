import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {AppUser} from "../../models/app-user.model";
import {UserService} from "../../services/user-service";
import {ActivatedRoute} from "@angular/router";
import {AppResponse} from "../../routing/app-response";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectInfo} from "../../models/project-info.enum";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user : AppUser | undefined;
  public form!: FormGroup;

  constructor(private userService: UserService, private activatedRoute : ActivatedRoute, private formBuilder : FormBuilder) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.user = response[AppResponse.PERSON];
    });
    this.form = this.formBuilder.group({
      firstName: [this.user?.firstName || '', Validators.required],
      email: [this.user?.email || '', Validators.required],
      password: [this.user?.password || '', Validators.required],
      username: [this.user?.username || '', Validators.required],
      lastName: [this.user?.lastName || '', Validators.required],
    })
  }
  get firstName(){
    return this.form.get('firstName')
  }
  get lastName(){
    return this.form.get('lastName')
  }
  submit(id: string): void {
    const user: AppUser = this.form.value;
    this.userService.editUser(user,id).subscribe(value =>{
      this.user = user;
    });
  }

}

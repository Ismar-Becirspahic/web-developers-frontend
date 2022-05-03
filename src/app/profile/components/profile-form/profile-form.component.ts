import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProjectInfo} from "../../../model/project-info.enum";
import {Project} from "../../../model/project.model";
import {ProfileModel} from "../../../model/profile-model";
import {ProfileInfoEnum} from "../../../model/profile-info.enum";


@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})

export class ProfileFormComponent implements OnInit {
  @Output()
  saveProfile: EventEmitter<ProfileModel> = new EventEmitter<ProfileModel>();

  @Input()
  profile: ProfileModel | undefined;

  public form!: FormGroup;
  public profileInfoEnum = ProfileInfoEnum;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [ProfileInfoEnum.id]: [this.profile?.[ProfileInfoEnum.id] || ''],
      [ProfileInfoEnum.name]: [this.profile?.[ProfileInfoEnum.name] || '', Validators.required],
      [ProfileInfoEnum.surname]: [this.profile?.[ProfileInfoEnum.surname] || '', Validators.required],
      [ProfileInfoEnum.location]: [this.profile?.[ProfileInfoEnum.location] || '', Validators.required],
      [ProfileInfoEnum.yearsOfExperience]: [this.profile?.[ProfileInfoEnum.yearsOfExperience] || ''],
      [ProfileInfoEnum.numberOfProjectsCompleted]: [this.profile?.[ProfileInfoEnum.numberOfProjectsCompleted] || ''],
      [ProfileInfoEnum.recentCompletedProject]: [this.profile?.[ProfileInfoEnum.recentCompletedProject] || ''],

    });
  }

  public post(): void {
    if (!this.form.valid) {
      return;
    }
    this.saveProfile.emit(this.form.value);
    this.resetForm();
  }
  private resetForm(): void {
    this.form.reset();
  }
}



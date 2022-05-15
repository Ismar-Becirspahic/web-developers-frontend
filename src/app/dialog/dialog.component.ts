import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProfileInfoEnum} from "../model/profile-info.enum";
import {ProfileModel} from "../model/profile-model";
import {ProfileService} from "../service/profile-service.service";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Output()
  saveProfile: EventEmitter<ProfileModel> = new EventEmitter<ProfileModel>();

  @Input()
  profile: ProfileModel | undefined;

  public form!: FormGroup;
  public profileInfoEnum = ProfileInfoEnum;
  public actionButton : string = 'Save';

  constructor(private formBuilder: FormBuilder,
              private profileService : ProfileService,
              @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef : MatDialogRef<DialogComponent>) {
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
    if (this.editData){
      this.actionButton = 'Update';
      this.form.controls['id'].setValue(this.editData.id);
      this.form.controls['name'].setValue(this.editData.name);
      this.form.controls['surname'].setValue(this.editData.surname);
      this.form.controls['location'].setValue(this.editData.location);
      this.form.controls['yearsOfExperience'].setValue(this.editData.yearsOfExperience);
      this.form.controls['numberOfProjectsCompleted'].setValue(this.editData.numberOfProjectsCompleted);
      this.form.controls['recentCompletedProject'].setValue(this.editData.recentCompletedProject);

    }
  }

  public post(): void {
    if (!this.form.valid) {
      return;
    }
    this.saveProfile.emit(this.form.value);
  }

  addProfile() {
      if (!this.editData){
        if (this.form.valid) {
          this.profileService.addProfile(this.form.value)
            .subscribe({
              next: (res) => {
                alert("Profile information added successfully");
                this.form.reset();
                this.dialogRef.close('save');
                console.log(res)
              },
              error: () => {
                alert("Error while adding profile information")
              }
            })
        }
      }else{
        this.updateProfile()
      }
    }
    updateProfile(){
      this.profileService.updateProfile(this.form.value,this.editData.id)
        .subscribe({
          next: (res)=>{
            alert("Profile updated successfully");
            this.form.reset();
            this.dialogRef.close('update');
            console.log(res);
          },
          error:()=>{
            alert("Error while updating the record");
          }
        })
    }
}

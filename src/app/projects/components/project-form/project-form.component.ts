import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProjectInfo} from "../../../model/project-info.enum";
import {Project} from "../../../model/project.model";
import {ProjectService} from "../../../service/project.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @Output()
  saveProject: EventEmitter<Project> = new EventEmitter<Project>();

  @Input()
  project: Project | undefined;

  public form!: FormGroup;

  public projectInfo = ProjectInfo;
  public actionButton : string = 'Save';

  constructor(private formBuilder: FormBuilder,
              private projectService : ProjectService,
              @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef : MatDialogRef<ProjectFormComponent>) {
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [ProjectInfo.id]: [this.project?.[ProjectInfo.id] || ''],
      [ProjectInfo.name]: [this.project?.[ProjectInfo.name] || '', Validators.required],
      [ProjectInfo.description]: [this.project?.[ProjectInfo.description] || '', Validators.required],
      [ProjectInfo.location]: [this.project?.[ProjectInfo.location] || '', Validators.required],
      [ProjectInfo.startDate]: [this.project?.[ProjectInfo.startDate] || ''],
      [ProjectInfo.endDate]: [this.project?.[ProjectInfo.endDate] || ''],
      [ProjectInfo.price]: [this.project?.[ProjectInfo.price] || '', Validators.required],
    });
    if (this.editData){
      this.actionButton = 'Update';
      this.form.controls['id'].setValue(this.editData.id);
      this.form.controls['name'].setValue(this.editData.name);
      this.form.controls['description'].setValue(this.editData.description);
      this.form.controls['location'].setValue(this.editData.location);
      this.form.controls['startDate'].setValue(this.editData.startDate);
      this.form.controls['endDate'].setValue(this.editData.endDate);
      this.form.controls['price'].setValue(this.editData.price);

    }
  }

  public post(): void {
    if (!this.form.valid) {
      return;
    }
    this.saveProject.emit(this.form.value);
  }

  addProject() {
    if (!this.editData){
      if (this.form.valid) {
        this.projectService.addProject(this.form.value)
          .subscribe({
            next: (res) => {
              alert("Project information added successfully");
              this.form.reset();
              this.dialogRef.close('save');
              console.log(res)
            },
            error: () => {
              alert("Error while adding project information")
            }
          })
      }
    }else{
      this.editProject()
    }
  }
  editProject(){
    this.projectService.editProject(this.form.value,this.editData.id)
      .subscribe({
        next: (res)=>{
          alert("Project updated successfully");
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



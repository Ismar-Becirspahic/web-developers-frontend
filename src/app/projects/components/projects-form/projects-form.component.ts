import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProjectInfo} from "../../../model/project-info.enum";
import {Project} from "../../../model/project.model";


@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.css']
})
export class ProjectsFormComponent implements OnInit {
  @Output()
  saveProject: EventEmitter<Project> = new EventEmitter<Project>();

  @Input()
  project: Project | undefined;

  public form!: FormGroup;
  public projectsInfo = ProjectInfo;

  constructor(private formBuilder: FormBuilder) {
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
  }

  public post(): void {
    if (!this.form.valid) {
      return;
    }
    this.saveProject.emit(this.form.value);
    this.resetForm();
  }
  private resetForm(): void {
    this.form.reset();
  }
}



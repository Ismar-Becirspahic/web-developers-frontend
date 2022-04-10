import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProjectInfoEnum} from "../../../model/project-info.enum";
import {ProjectModel} from "../../../model/project-model";


@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.css']
})
export class ProjectsFormComponent {
  @Output()
  saveProject: EventEmitter<ProjectModel> = new EventEmitter<ProjectModel>();

  @Input()
  project: ProjectModel | undefined;

  constructor(private formBuilder: FormBuilder) { }

  public form!: FormGroup;
  public projectsInfo = ProjectInfoEnum;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [ProjectInfoEnum.id]: [this.project?.[ProjectInfoEnum.id] || ''],
      [ProjectInfoEnum.name]: [this.project?.[ProjectInfoEnum.name] || '', Validators.required],
      [ProjectInfoEnum.description]: [this.project?.[ProjectInfoEnum.description] || '', Validators.required],
      [ProjectInfoEnum.location]: [this.project?.[ProjectInfoEnum.location] || '', Validators.required],
      [ProjectInfoEnum.startDate]: [this.project?.[ProjectInfoEnum.startDate] || '', Validators.required],
      [ProjectInfoEnum.endDate]: [this.project?.[ProjectInfoEnum.endDate] || '', Validators.required],
      [ProjectInfoEnum.price]: [this.project?.[ProjectInfoEnum.price] || '', Validators.required],
    });
  }

  public post(): void {
    if (!this.form.valid) {
      return;
    } else {
      this.saveProject.emit(this.form.value);
    }

  }

}

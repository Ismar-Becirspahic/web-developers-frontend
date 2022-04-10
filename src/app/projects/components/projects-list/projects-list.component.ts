import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProjectModel} from "../../../model/project-model";
import {ProjectInfoEnum} from "../../../model/project-info.enum";
import {Route} from "../../../routing/route";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  projects: ProjectModel[] = [];

  @Output()
  removeProject: EventEmitter<ProjectModel> = new EventEmitter<ProjectModel>()

  public projectInfo = ProjectInfoEnum;
  public route = Route;

  public remove(project: ProjectModel): void {
    this.removeProject.emit(project);
  }

}

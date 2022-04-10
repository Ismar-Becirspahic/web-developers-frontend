import { Component, OnInit } from '@angular/core';
import {ProjectModel} from "../../../model/project-model";
import {database} from "../../../database/database";

@Component({
  selector: 'app-projects-list-container',
  templateUrl: './projects-list-container.component.html',
  styleUrls: ['./projects-list-container.component.css']
})
export class ProjectsListContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public projects: ProjectModel[] = database;

  removeProject(project: ProjectModel) {
    const index = this.projects.indexOf(project);
    if (index > -1) {
      this.projects.splice(index, 1);
    }
  }
}

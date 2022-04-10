import { Component, OnInit } from '@angular/core';
import {ProjectModel} from "../../../model/project-model";
import {ProjectResponse} from "../../../routing/project-response";
import {ProjectInfoEnum} from "../../../model/project-info.enum";
import {Route} from "../../../routing/route";
import {database} from "../../../database/database";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-projects-form-container',
  templateUrl: './projects-form-container.component.html',
  styleUrls: ['./projects-form-container.component.css']
})
export class ProjectsFormContainerComponent implements OnInit {

  public project: ProjectModel | undefined;

  private isEditing: boolean = false;
  private projects: ProjectModel[] = database;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,) {
  }

  ngOnInit(): void {
    this.isEditing = this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path === Route.EDIT;
    if (this.isEditing) {
      this.activatedRoute.data.subscribe((response: any) => {
        this.project = response[ProjectResponse.PROJECT];
      });
    }
  }

  saveProject(project: ProjectModel): void {
    if (this.isEditing) {
      const existingIndex = this.projects.findIndex(i => i[ProjectInfoEnum.id] === project[ProjectInfoEnum.id]);
      this.projects.splice(existingIndex, 1, project);
    } else {
      project[ProjectInfoEnum.id] = new Date().getTime().toString();
      this.projects.push(project);
    }
    this.router.navigate([Route.PROJECTS]);
  }

}

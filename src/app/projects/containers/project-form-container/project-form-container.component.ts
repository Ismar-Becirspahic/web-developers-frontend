import { Component, OnInit } from '@angular/core';
import {Project} from "../../../model/project.model";
import {ProjectResponse} from "../../../routing/project-response";
import {ProjectInfo} from "../../../model/project-info.enum";
import {Route} from "../../../routing/route";
import {database} from "../../../database/database";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../../service/project.service";

@Component({
  selector: 'app-project-form-container',
  templateUrl: './project-form-container.component.html',
  styleUrls: ['./project-form-container.component.css']
})
export class ProjectFormContainerComponent implements OnInit {

  public project: Project | undefined;

  private isEditing: boolean = false;
  private projects: Project[] = database;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
  ) {
  }

  ngOnInit(): void {
    this.isEditing = this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path === Route.EDIT;
    if (this.isEditing) {
      this.activatedRoute.data.subscribe((response: any) => {
        this.project = response[ProjectResponse.PROJECT];
      });
    }
  }

  saveProject(project: Project): void {
    if (this.isEditing) {
      const existingIndex = this.projects.findIndex(i => i[ProjectInfo.id] === project[ProjectInfo.id]);
      this.projects.splice(existingIndex, 1, project);
      this.router.navigate([Route.PROJECTS]);
    } else {
      this.projectService.addProject(project).subscribe(value => {
        this.router.navigate([Route.PROJECTS]);
      });
    }
  }
}

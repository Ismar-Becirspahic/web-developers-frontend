import { Component, OnInit } from '@angular/core';
import {Project} from "../../../model/project.model";
import {database} from "../../../database/database";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectResponse} from "../../../routing/project-response";
import {Route} from "../../../routing/route";
import {ProjectService} from "../../../service/project.service";

@Component({
  selector: 'app-projects-list-container',
  templateUrl: './projects-list-container.component.html',
  styleUrls: ['./projects-list-container.component.css']
})
export class ProjectsListContainerComponent implements OnInit {

  public projects: Project[] = [];

  constructor(private activatedRoute:ActivatedRoute, private projectService:ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.projects = response[ProjectResponse.PROJECTS];
    });
  }

  removeProject(id: string) {
    this.projectService.deleteProject(id).subscribe(value => {
      this.router.navigate([Route.PROJECTS]);
    });
  }
}

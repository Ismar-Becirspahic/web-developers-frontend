import { Component, OnInit } from '@angular/core';
import {ProjectResponse} from "../../../routing/project-response";
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../../../model/project.model";
import {ProjectService} from "../../../service/project.service";
import {Route} from "../../../routing/route";

@Component({
  selector: 'app-projects-view-container',
  templateUrl: './projects-view-container.component.html',
  styleUrls: ['./projects-view-container.component.css']
})
export class ProjectsViewContainerComponent implements OnInit {


  public project: Project | undefined;

  constructor(private activatedRoute: ActivatedRoute, private projectService:ProjectService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.project = response[ProjectResponse.PROJECT];
    });

  }
  removeProject(id: string) {
    this.projectService.deleteProject(id).subscribe(value => {
      this.router.navigate([Route.PROJECTS]);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {Project} from "../../../models/project.model";
import {AppResponse} from "../../../routing/app-response";
import {ProjectInfo} from "../../../models/project-info.enum";
import {Route} from "../../../routing/route";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../../services/project.service";

@Component({
  selector: 'app-project-form-container',
  templateUrl: './project-form-container.component.html',
  styleUrls: ['./project-form-container.component.css']
})
export class ProjectFormContainerComponent implements OnInit {

  public project: Project | undefined;

  private isEditing: boolean = false;

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
        this.project = response[AppResponse.PROJECT];
      });
    }
  }
}

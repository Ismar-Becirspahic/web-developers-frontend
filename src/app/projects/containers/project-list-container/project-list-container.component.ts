import {Component, OnInit} from '@angular/core';
import {Project} from "../../../model/project.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AppResponse} from "../../../routing/app-response";
import {ProjectService} from "../../../service/project.service";

@Component({
  selector: 'app-project-list-container',
  templateUrl: './project-list-container.component.html',
  styleUrls: ['./project-list-container.component.css']
})
export class ProjectListContainerComponent implements OnInit {

  public items: Project[] = [];
  public projects: Project[] = [];

  constructor(private activatedRoute:ActivatedRoute, private projectService:ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.projects = response[AppResponse.PROJECTS];
    });
  }

}

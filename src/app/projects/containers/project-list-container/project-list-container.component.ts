import {Component, OnInit} from '@angular/core';
import {Project} from "../../../model/project.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectResponse} from "../../../routing/project-response";
import {ProjectService} from "../../../service/project.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-project-list-container',
  templateUrl: './project-list-container.component.html',
  styleUrls: ['./project-list-container.component.css']
})
export class ProjectListContainerComponent implements OnInit {

  public projects: Project[] = [];

  constructor(private activatedRoute:ActivatedRoute, private projectService:ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.projects = response[ProjectResponse.PROJECTS];
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {ProjectResponse} from "../../../routing/project-response";
import {ActivatedRoute} from "@angular/router";
import {ProjectModel} from "../../../model/project-model";

@Component({
  selector: 'app-projects-view-container',
  templateUrl: './projects-view-container.component.html',
  styleUrls: ['./projects-view-container.component.css']
})
export class ProjectsViewContainerComponent implements OnInit {


  public project: ProjectModel | undefined;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.project = response[ProjectResponse.PROJECT];
    });

  }
}

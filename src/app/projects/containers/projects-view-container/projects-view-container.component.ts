import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {ProjectResponse} from "../../../routing/project-response";
import {ActivatedRoute} from "@angular/router";
import {ProjectModel} from "../../../model/project-model";
=======
>>>>>>> main

@Component({
  selector: 'app-projects-view-container',
  templateUrl: './projects-view-container.component.html',
  styleUrls: ['./projects-view-container.component.css']
})
export class ProjectsViewContainerComponent implements OnInit {

<<<<<<< HEAD
  public project: ProjectModel | undefined;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.project = response[ProjectResponse.PROJECT];
    });
=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> main
  }

}

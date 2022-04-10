<<<<<<< HEAD
import {Component, Input, OnInit} from '@angular/core';
import {ProjectModel} from "../../../model/project-model";
import {ProjectInfoEnum} from "../../../model/project-info.enum";
import {Route} from "../../../routing/route";
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> main

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.css']
})
<<<<<<< HEAD
export class ProjectsViewComponent {

  @Input()
  public project!: ProjectModel;

  public projectInfo = ProjectInfoEnum;
  public route = Route;
=======
export class ProjectsViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
>>>>>>> main

}

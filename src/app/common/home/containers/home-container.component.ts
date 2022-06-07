import {Component, OnInit} from '@angular/core';
import {Project} from "../../../model/project.model";
import {ActivatedRoute} from "@angular/router";
import {AppResponse} from "../../../routing/app-response";

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
})
export class HomeContainerComponent implements OnInit {

  public items: Project[] = [];
  public projects: Project[] = [];

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.projects = response[AppResponse.PROJECTS];
    });
  }

}

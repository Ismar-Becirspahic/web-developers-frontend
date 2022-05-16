import {Component, OnInit} from '@angular/core';
import {Project} from "../../model/project.model";
import {ActivatedRoute} from "@angular/router";
import {ProjectResponse} from "../../routing/project-response";

@Component({
  selector: 'app-home-search-container',
  templateUrl: './home-search-container.component.html',
})
export class HomeSearchContainerComponent implements OnInit {

  public items: Project[] = [];
  public projects: Project[] = [];

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.projects = response[ProjectResponse.PROJECTS];
    });
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {ProjectModel} from "../../../model/project-model";
import {ProjectInfoEnum} from "../../../model/project-info.enum";
import {Route} from "../../../routing/route";

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.css']
})

export class ProjectsViewComponent {

  @Input()
  public project!: ProjectModel;

  public projectInfo = ProjectInfoEnum;
  public route = Route;
}



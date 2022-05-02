import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from "../../../model/project.model";
import {ProjectInfo} from "../../../model/project-info.enum";
import {Route} from "../../../routing/route";

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.css']
})

export class ProjectsViewComponent {

  @Input()
  public project!: Project;

  public projectInfo = ProjectInfo;
  public route = Route;

  @Output()
  removeProject: EventEmitter<string> = new EventEmitter<string>()

  public remove(id: string): void {
    this.removeProject.emit(id);
  }
}



import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from "../../../model/project.model";
import {ProjectInfo} from "../../../model/project-info.enum";
import {Route} from "../../../routing/route";
import {ProjectService} from "../../../service/project.service";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {

  @Input()
  projects: Project[] = [];

  @Output()
  removeProject: EventEmitter<string> = new EventEmitter<string>()

  public projectInfo = ProjectInfo;
  public route = Route;

  public remove(id: string): void {
    this.removeProject.emit(id);
  }
}

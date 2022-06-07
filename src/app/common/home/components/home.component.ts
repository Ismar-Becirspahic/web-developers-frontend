import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Route} from "../../../routing/route";
import {Project} from "../../../model/project.model";
import {ProjectService} from "../../../service/project.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()
  project: Project[] = [];

  public route = Route;

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
  }

  becomeUnavailable(id: string) {
    for (let pr of this.project) {
      if (id == pr.id) {
        pr.unavailable = true;
        this.projectService.editProject(pr, id).subscribe(value => {
        });
      }
    }
  }
}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Project} from '../model/project.model';
import {Route} from '../routing/route';
import {ProjectService} from "../service/project.service";

@Injectable({providedIn: 'root'})
export class ProjectResolver implements Resolve<Project> {

  constructor(private projectService:ProjectService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Project> | Promise<Project> | Project {
    const id = route.paramMap.get(Route.ID.substring(1));
    const project = this.projectService.getOneProject(id!);
    if(!project) {
      throw 'Project not found!';
    }
    return project;
}
}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Project} from "../models/project.model";
import {ProjectService} from "../services/project.service";

@Injectable({providedIn: 'root'})
export class ProjectsResolver implements Resolve<Project[]> {

  constructor(private projectService:ProjectService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Project[]> | Promise<Project[]> | Project[] {
    return this.projectService.getProjects();
  }

}

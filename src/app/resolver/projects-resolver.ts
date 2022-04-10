import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProjectModel} from '../model/project-model';
import {database} from '../database/database';
import {Route} from '../routing/route';
import {ProjectInfoEnum} from '../model/project-info.enum';

@Injectable({providedIn: 'root'})
export class ProjectsResolver implements Resolve<ProjectModel> {

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProjectModel> | Promise<ProjectModel> | ProjectModel {
    const project = database.find(project => project[ProjectInfoEnum.id] === route.paramMap.get(Route.ID.substring(1)));
    if(!project) {
      throw 'Item not found!';
    }
    return project;
  }
}

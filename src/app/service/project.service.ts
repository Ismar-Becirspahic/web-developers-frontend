import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../model/project.model";

@Injectable()
export class ProjectService {

  private readonly baseUrl: string = "http://localhost:8080/projects";

  constructor(private http:HttpClient) {
  }

  public getProjects():Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl);
  }

  public getOneProject(id:string):Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/${id}`);  }

  public addProject(project:Project):Observable<Project> {
    return this.http.post<Project>(`${this.baseUrl}`, project);
  }

  public deleteProject(id:string):Observable<Project> {
    return this.http.delete<Project>(`${this.baseUrl}/${id}`);
  }

}

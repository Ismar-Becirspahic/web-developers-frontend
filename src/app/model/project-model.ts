import {ProjectInfoEnum} from "./project-info.enum";

export interface ProjectModel {
  [ProjectInfoEnum.id]?:string;
  [ProjectInfoEnum.name]: string;
  [ProjectInfoEnum.description]: string;
  [ProjectInfoEnum.location]: string;
  [ProjectInfoEnum.startDate]: Date;
  [ProjectInfoEnum.endDate]: Date;
  [ProjectInfoEnum.price]: number;

}

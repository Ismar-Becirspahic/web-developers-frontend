import {ProfileInfoEnum} from "./profile-info.enum";

export interface ProfileModel {
  [ProfileInfoEnum.id]?:string;
  [ProfileInfoEnum.name]: string;
  [ProfileInfoEnum.surname]: string;
  [ProfileInfoEnum.password]: string;
  [ProfileInfoEnum.location]: string;
  [ProfileInfoEnum.numberOfProjectsCompleted]: number;
  [ProfileInfoEnum.yearsOfExperience]: number;
  [ProfileInfoEnum.recentCompletedProject]: string;

}

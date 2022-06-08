import {ProjectInfo} from "./project-info.enum";
import {ProfileInfo} from "./profile-info.enum";

export interface Project {
  [ProjectInfo.id]:string;
  [ProjectInfo.name]: string;
  [ProjectInfo.description]: string;
  [ProjectInfo.location]: string;
  [ProjectInfo.startDate]: Date;
  [ProjectInfo.endDate]: Date;
  [ProjectInfo.price]: number;
  [ProjectInfo.unavailable]: boolean;
  [ProjectInfo.postedBy]: string;
  [ProfileInfo.username]:string;
}

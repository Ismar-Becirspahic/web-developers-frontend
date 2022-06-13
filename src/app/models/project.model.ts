import {ProjectInfo} from "./project-info.enum";

export interface Project {
  [ProjectInfo.id]:string;
  [ProjectInfo.name]: string;
  [ProjectInfo.description]: string;
  [ProjectInfo.location]: string;
  [ProjectInfo.startDate]: string;
  [ProjectInfo.endDate]: string;
  [ProjectInfo.price]: number;
  [ProjectInfo.unavailable]: boolean;
  [ProjectInfo.postedBy]: string;
}

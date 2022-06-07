import {ProfileInfo} from "./profile-info.enum";

export interface Profile {
  [ProfileInfo.id]:string;
  [ProfileInfo.username]: string;
  [ProfileInfo.email]: string;
  [ProfileInfo.password]: string;

}

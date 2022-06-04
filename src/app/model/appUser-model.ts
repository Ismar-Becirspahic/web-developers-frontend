import {AppUserInfoEnum} from "./appUser-info.enum";


export interface AppUserModel {
  [AppUserInfoEnum.id]?:string;
  [AppUserInfoEnum.username]: string;
  [AppUserInfoEnum.email]: string;
  [AppUserInfoEnum.password]: string;

}

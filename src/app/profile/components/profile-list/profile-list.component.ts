import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Route} from "../../../routing/route";
import {ProfileModel} from "../../../model/profile-model";
import {ProfileInfoEnum} from "../../../model/profile-info.enum";

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})

export class ProfileListComponent {

  @Input()
  profiles: ProfileModel[] = [];

  @Output()
  removeProfile: EventEmitter<string> = new EventEmitter<string>()

  public profileInfoEnum = ProfileInfoEnum;
  public route = Route;

  public remove(id: string): void {
    this.removeProfile.emit(id);
  }
}

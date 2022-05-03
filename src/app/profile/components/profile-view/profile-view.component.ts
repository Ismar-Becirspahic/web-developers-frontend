import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Route} from "../../../routing/route";
import {ProfileModel} from "../../../model/profile-model";
import {ProfileInfoEnum} from "../../../model/profile-info.enum";


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})


export class ProfileViewComponent {

  @Input()
  public profile!: ProfileModel;

  public profileInfoEnum = ProfileInfoEnum;
  public route = Route;

  @Output()
  removeProfile: EventEmitter<string> = new EventEmitter<string>()

  public remove(id: string): void {
    this.removeProfile.emit(id);
  }
}


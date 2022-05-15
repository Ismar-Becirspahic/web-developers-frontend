import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Route} from "../../../routing/route";
import {ProfileModel} from "../../../model/profile-model";
import {ProfileInfoEnum} from "../../../model/profile-info.enum";
import { DialogComponent } from 'src/app/dialog/dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ProfileService} from "../../../service/profile-service.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})

export class ProfileListComponent implements OnInit{

  @Input()
  profiles: ProfileModel[] = [];

  @Output()
  removeProfile: EventEmitter<string> = new EventEmitter<string>()

  public profileInfoEnum = ProfileInfoEnum;
  public route = Route;
  displayedColumns: string[] = ['name', 'surname', 'location','numberOfProjectsCompleted','yearsOfExperience','recentCompletedProject','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog : MatDialog, private profileService : ProfileService) {
  }
  ngOnInit(): void{
    this.getAllProfiles();
  }


  openDialog() {
      this.dialog.open(DialogComponent, {
        width:'30%'
      }).afterClosed().subscribe(val=>{
        if (val === 'save'){
          this.getAllProfiles();
        }
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editProfile(row: any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      data:row,
    }).afterClosed().subscribe(val=>{
      if (val === 'update'){
        console.log(val)
        this.getAllProfiles();
      }
    });
  }
  deleteProfile(id:string){
    this.profileService.deleteProfile(id)
      .subscribe({
        next:(res)=>{
          console.log(res);
          alert("Profile information deleted successfully");
          this.getAllProfiles();
        },
        error:(err)=>{
          console.log(err);
          alert("Error while deleting profile information");
          this.getAllProfiles();
        }
      })
  }
  getAllProfiles(){
    this.profileService.getProfiles()
      .subscribe({
        next: (res)=>{
          console.log(res);
          this.dataSource = new MatTableDataSource<any>(res);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        },
        error:(err)=>{
          alert("Error while fetching profile information")
        }
      })
  }
}

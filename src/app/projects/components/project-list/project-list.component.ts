import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Project} from "../../../models/project.model";
import {Route} from "../../../routing/route";
import {ProjectService} from "../../../services/project.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {ProjectFormComponent} from "../project-form/project-form.component";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

  @Input()
  projects: Project[] = [];

  @Output()
  removeProject: EventEmitter<string> = new EventEmitter<string>()

  public route = Route;

  openDialog() {
    this.dialog.open(ProjectFormComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if (val === 'save'){
        this.getProjects();
      }
    });
  }
  displayedColumns: string[] = ['id', 'name', 'description','location','startDate','endDate', 'price', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog : MatDialog, private projectService : ProjectService) {
  }
  ngOnInit(): void{
    this.getProjects();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editProject(row: any){
    this.dialog.open(ProjectFormComponent,{
      width:'30%',
      data:row,
    }).afterClosed().subscribe(val=>{
      if (val === 'update'){
        console.log(val)
        this.getProjects();
      }
    });
  }

  deleteProject(id:string){
    this.projectService.deleteProject(id)
      .subscribe({
        next:(res)=>{
          console.log(res);
          alert("Project deleted successfully.");
          this.getProjects();
        },
        error:(err)=>{
          console.log(err);
          alert("Error while deleting project.");
          this.getProjects();
        }
      })
  }

  getProjects(){
    this.projectService.getProjects()
      .subscribe({
        next: (res)=>{
          console.log(res);
          this.dataSource = new MatTableDataSource<any>(res);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        },
        error:(err)=>{
          alert("Error while fetching projects.")
        }
      })
  }
}

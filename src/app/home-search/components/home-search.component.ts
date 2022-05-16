import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Project} from "../../model/project.model";
import {Route} from "../../routing/route";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {ProjectService} from "../../service/project.service";

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  @Input()
  project: Project[] = [];

  public route = Route;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
  }

  ngOnInit(): void{
  }

}

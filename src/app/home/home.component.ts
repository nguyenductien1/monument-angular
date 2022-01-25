import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { Monument } from '../models/monument.model'
import { MonumentService } from '../services/monument.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  monuments: Monument[] = [];

  
 
  //HTTP Get all monuments
  getAllMonuments() :void {
      this.monumentService.getAllMonuments().subscribe(monuments => {
        this.monuments = monuments;
        this.dataSource = new MatTableDataSource(monuments);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(monuments);
      })
  }
  
  //Table data
  displayedColumns = ['codeM', 'nomM', 'longitude', 'latitude', 'lieu'];
  dataSource: MatTableDataSource<Monument>;
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor( private userService: UserService, private monumentService: MonumentService) {
    this.dataSource = new MatTableDataSource(this.monuments);
    
   }
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  ngOnInit(): void {
    this.getAllMonuments();
  }

}

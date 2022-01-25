import { Component, OnInit, ViewChild } from '@angular/core';
import { Monument } from '../../models/monument.model'
import { MonumentService } from '../../services/monument.service';

import { MatPaginator,  } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //Table data
  displayedColumns = ['codeM', 'nomM', 'longitude', 'latitude', 'lieu', 'gestion'];
  dataSource: MatTableDataSource<Monument>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  monuments: Monument[] = [];
  //HTTP Get all monuments
  getAllMonuments() :void {
    this.monumentService.getAllMonuments().subscribe(monuments => {
      this.monuments = monuments;
      this.dataSource = new MatTableDataSource(monuments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  deleteMonument():void {

  }
  constructor(private monumentService: MonumentService) { 
    this.dataSource = new MatTableDataSource(this.monuments);
  }

  ngOnInit(): void {
    this.getAllMonuments();
  }

}

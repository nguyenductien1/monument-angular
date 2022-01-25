import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MonumentService } from '../services/monument.service'
import { Monument } from '../models/monument.model';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-monument-details',
  templateUrl: './monument-details.component.html',
  styleUrls: ['./monument-details.component.css']
})
export class MonumentDetailsComponent implements OnInit {

  token = window.localStorage.getItem('token');
  authToken = this.token != null ? this.token : '';
  role = window.localStorage.getItem('role');
  authRole = this.role !=null ? this.role:'';
  
  monument: Monument = new Monument("","","","",0,0,"",[]);
  constructor(
    private route: ActivatedRoute,
    private monumentService: MonumentService,
    private location: Location
  ) { }

  getMonument():void {
    const id = this.route.snapshot.paramMap.get('id');
    this.monumentService.getMonumentById(id!).subscribe(monument=>{
      
      this.monument = monument;
      console.log(this.monument.celebrities);
      
    })
  }

  deleteMonument():void {

  }
  modifyMonument():void {
    
  }

  detailsForm = new FormGroup({
    codeM : new FormControl(''),
    nomM : new FormControl(''),
    lieu: new FormControl(''),
    longitude: new FormControl(''),
    latitude: new FormControl(''),
    photoUrl: new FormControl(''),
  })

  ngOnInit(): void {
    this.getMonument();
  }

}

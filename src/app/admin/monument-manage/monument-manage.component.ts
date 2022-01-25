import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators, NgModel } from '@angular/forms';
import {Monument} from '../../models/monument.model'
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-monument-manage',
  templateUrl: './monument-manage.component.html',
  styleUrls: ['./monument-manage.component.css']
})
export class MonumentManageComponent implements OnInit {

  monument = new Monument("","","","",0,0,"",[]);

  monumentForm = new FormGroup({
        nomM:         new FormControl(this.monument.nomM, [Validators.required, Validators.maxLength(255)]),
        codeM:        new FormControl(this.monument.codeM, [Validators.required, Validators.maxLength(6)]),
        photoUrl:     new FormControl(this.monument.photoUrl),
        lieu:         new FormControl(this.monument.lieu),
        latitude:     new FormControl(this.monument.latitude, [Validators.required, Validators.min(0.00001), Validators.max(90), Validators.maxLength(6)]),
        longitude:    new FormControl(this.monument.longitude, [Validators.required, Validators.min(0.00001), Validators.max(90), Validators.maxLength(6)]),
        celebrities:  new FormControl(this.monument.celebrities),


  })

  matcher = new CustomErrorStateMatcher();
  constructor() { }

  ngOnInit(): void {
    
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


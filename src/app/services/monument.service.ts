import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";
import { Monument } from "../models/monument.model"
import { environment } from "src/environments/environment";


const MONUMENT_API_ENDPOINT: string = environment.API_ENDPOINT + "/monuments";
@Injectable({
  providedIn: 'root'
})



export class MonumentService {

  constructor(private http: HttpClient) { }

  getAllMonuments(): Observable<Monument[]> {
    return this.http.get<Monument[]>(MONUMENT_API_ENDPOINT).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof Error) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          alert(`${error.error}`)
        }
        return [];
      })
    )
  }

  getMonumentById(id: string): Observable<Monument>{
    return this.http.get<Monument>(MONUMENT_API_ENDPOINT+`/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof Error) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          alert(`${error.error}`)
        }
        return [];
      })
    )
  }

}

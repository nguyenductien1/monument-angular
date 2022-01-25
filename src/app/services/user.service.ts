import { Injectable } from '@angular/core';
import { User } from "../models/user.model";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { MessagesService } from "../services/messages.service"
import { HttpClient, HttpResponse, HttpErrorResponse, } from '@angular/common/http';
import { Router } from '@angular/router';

const USER_API_ENDPOINT: string = environment.API_ENDPOINT + "/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authToken = "";
  redirectUrl: string = "/admin/profile";
  


  constructor(private http: HttpClient, private messagesService: MessagesService, private router: Router) {
    if (window && window.localStorage) {
      this.authToken == window.localStorage.getItem('token');
    }
  }
  

  login(user:User) {
    return this.http.post(environment.API_ENDPOINT + "/login", user).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof Error) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          alert(`${error.error}`)
        }
        return [];
      })
    );
  }

  /**
   * Set token in localstogage to null
   */
  logout(): void {
    this.authToken = "";
    if (window && window.localStorage) {
      window.localStorage.setItem("token", "");
      window.localStorage.setItem("username", "");
      window.localStorage.setItem("role", "");
      this.router.navigate(['/login']);
    }
  }

  add(user: User){
    return this.http.post(USER_API_ENDPOINT, user, { responseType: 'text' }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          alert(`${error.error}`)
        }
        // If you want to return a new response:
        //return of(new HttpResponse({body: [{name: "Default value..."}]}));
        // If you want to return the error on the upper level:
        //return throwError(error);
        // or just return nothing:
        return "";
      })
    )
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messagesService.add(`UserService: ${message}`);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monument-frontend';
  //Logout
  logout() {
    if (window && window.localStorage) {
      window.localStorage.setItem("token", "");
      window.localStorage.setItem("username", "");
      window.localStorage.setItem("role", "");
    }
  }
}

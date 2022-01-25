import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }
  login(username: string, password: string){
    this.userService.login(new User(username, password)).subscribe(
      (res:any) => {
        if (res.error){
          alert(res.error);
        }
        else{
          alert('Login successful')
          window.localStorage.setItem('username', res.userName);
          window.localStorage.setItem('token', res.token);
          window.localStorage.setItem('role', res.roles);
        }
      }
    )
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(
    private userService: UserService,
  ) {}
  
  addUser(username: string, password: string){
    this.userService.add(new User(username, password)).subscribe(
      (res) => {
        if (res === "Created!"){
          alert(`User ${username} ${res}`);
        }
        else{
          alert(res);
        }
      }
    )
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../service/user-service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public user;
  public msg;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.msg = '';
  }


  addUser(): void {
    this.userService.addUser(this.user)
      .subscribe(resp => {
          this.msg = 'User was created successfully';
          this.user = new User();
        },
        err => {
          this.msg = 'User was not added'
        });
  }
}

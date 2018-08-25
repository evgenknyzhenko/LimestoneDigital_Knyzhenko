import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../service/user-service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public user = new User();
  public msg = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
  }

  checkUser(): void {
    this.userService.checkUser(this.user)
      .subscribe(resp => {
          this.msg = 'User was created succesfully';
          this.user = new User();
        },
        err => {
          this.msg = 'User was not added'
        });
  }
}

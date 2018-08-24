import {Component, OnInit, Output} from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../service/user-service";
import {TicketsComponent} from "../tickets/tickets.component";
import {TicketService} from "../service/ticket-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user;
  private msg;


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.msg = '';
  }


  LoginUser(): void {
    this.userService.loginUser(this.user)
      .subscribe(resp => {
        this.msg = 'User was created succesfully';
        this.user = new User();
      },
        err => {
        this.msg = 'User was not added'
        });
  }
}

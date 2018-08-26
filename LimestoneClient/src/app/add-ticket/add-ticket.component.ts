import {Component, OnInit} from '@angular/core';
import {Ticket} from "../model/ticket";
import {TicketService} from "../service/ticket-service";

@Component({
  selector: 'app-add-to-do-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {
  public ticket;
  public msg;

  constructor(private ticketService: TicketService) {
  }

  ngOnInit() {
    this.ticket = new Ticket();
    this.msg = '';
  }

  addTicket(): void {
    this.ticketService.addTicket(this.ticket)
      .subscribe(resp => {
          this.msg = 'User was created successfully';
          this.ticket = new Ticket();
        },
        err => {
          this.msg = 'User was not added'
        });
  }
}

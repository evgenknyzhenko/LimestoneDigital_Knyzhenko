import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "../model/ticket";
import {TicketService} from "../service/ticket-service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  private ticket;
  private msg;

  ///????????
  @Input() selectedTicket: Ticket;
  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticket = new Ticket();
    this.ticket = this.selectedTicket;
    this.msg = '';
    this.deleteTicket();
  }


  deleteTicket() {
    this.ticketService.deleteTicket(this.ticket)
      .subscribe(
        resp => {
          this.msg = 'Ticket was deleted';
          this.ticket = new Ticket();
        },
          err => {
            this.msg = 'Ticket was not delete';
          }

      );

  }
}

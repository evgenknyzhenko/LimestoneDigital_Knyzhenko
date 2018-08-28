import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "../model/ticket";
import {TicketService} from "../service/ticket-service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  private msg;

  @Input() selectedTicket: Ticket;
  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.msg = '';
  }


  deleteTicket() {
    this.ticketService.deleteTicket(this.selectedTicket)
      .subscribe(
        resp => {
          this.msg = 'Ticket was deleted';
          console.log('sdefefe');
        },
        err => {
          this.msg = 'Ticket was not delete';
        }

      );

  }
}

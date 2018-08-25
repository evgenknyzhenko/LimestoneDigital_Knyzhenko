import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "../model/ticket";
import {TicketService} from "../service/ticket-service";
import {User} from "../model/user";
import {s} from "@angular/core/src/render3";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  public tickets: Array<Ticket> = [];
  public selectedTicket: Ticket;


  constructor(private ticketService: TicketService) {
  }

  ngOnInit() {
    this.getAllTickets();
  }


  private getAllTickets(): void {
    this.ticketService.getAllTickets()
      .subscribe(
        resp => this.tickets = resp,
        err => console.log('Tickets can not read')
      );
  }

  public onSelect(ticket: Ticket) {
    this.selectedTicket = ticket;
  }
}

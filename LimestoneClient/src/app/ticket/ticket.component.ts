import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "../model/ticket";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input() selectedTicket: Ticket;
  constructor() { }

  ngOnInit() {
  }

}

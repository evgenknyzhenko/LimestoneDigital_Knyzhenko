import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "../model/ticket";
import {TicketService} from "../service/ticket-service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  public ticketForEdit: Ticket;
  private msg;

  @Input() selectedTicket: Ticket;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.msg = '';
  }

  public deleteTicket() {
    this.ticketService.deleteTicket(this.selectedTicket)
      .subscribe(
        resp => {
          this.msg = 'Ticket was deleted';
        },
        err => {
          this.msg = 'Ticket was not delete';
        }
      );
  }

  onSelectEditTicket() {
    this.ticketForEdit = this.selectedTicket;
  }

  editTicket() {
    this.ticketService.editTicket(this.ticketForEdit)
      .subscribe(
        resp => {
          this.msg = 'Ticket was edit';
        },
        err => {
          this.msg = 'Ticket was not edit';
        }
      );
  }
}

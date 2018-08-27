import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Ticket} from "../model/ticket";

@Injectable({providedIn: 'root'})
export class TicketService {

  constructor(private http: HttpClient) {}

  public getAllTickets(): Observable<Array<Ticket>> {
    return this.http.get<Array<Ticket>>(
      'http://localhost:8080/tickets', {observe: 'body'}
    );
  }


  addTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post('http://localhost:8080/addTicket', ticket);

  }

  /*deleteTicket(selectedTicket: Ticket): Observable<Ticket> {
    return this.http.post('http://localhost:8080/deleteTicket', selectedTicket);
  }*/
  deleteTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post('http://localhost:8080/deleteUser', ticket);
  }
}

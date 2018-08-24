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
}

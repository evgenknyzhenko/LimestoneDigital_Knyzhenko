package app.service;

import app.model.Ticket;

public interface TicketServise {
    Ticket addTicket(Ticket ticket);

    void deleteTicket(Ticket ticket);

    Ticket editTicket(Ticket ticket);
}

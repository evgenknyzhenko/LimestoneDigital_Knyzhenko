package app.service;

import app.dao.TicketRepository;
import app.model.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketServiseImpl implements TicketServise {
    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public Ticket addTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    @Override
    public void deleteTicket(Ticket ticket) {
        ticketRepository.delete(ticket);
    }

    @Override
    public Ticket editTicket(Ticket ticket) {
        Ticket editedTicket = ticketRepository.saveAndFlush(ticket);
        System.out.println(editedTicket);
        return editedTicket;
    }
}

package app.controller;

import app.model.Ticket;
import app.service.TicketServise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class TicketController {

    @Autowired
    private TicketServise ticketServise;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/addTicket", method = RequestMethod.POST)
    public Ticket addTicket(@RequestBody Ticket ticket) {
        ticket.setUser(UserController.getCurrentUser());
        System.out.println(ticket);
        return ticketServise.addTicket(ticket);
        //return ticket;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/deleteTicket", method = RequestMethod.POST)
    public Ticket deleteTicket(@RequestBody Ticket ticket) {
        System.out.println(ticket);
        return ticket;
    }
}

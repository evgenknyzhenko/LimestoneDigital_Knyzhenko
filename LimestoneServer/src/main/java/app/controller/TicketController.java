package app.controller;

import app.model.Ticket;
import app.service.TicketServise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class TicketController {

    @Autowired
    private TicketServise ticketServise;

    @Autowired
    private UserController userController;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/addTicket", method = RequestMethod.POST)
    public Ticket addTicket(@RequestBody Ticket ticket) {
        ticket.setUser(userController.getCurrentUser());
        return ticketServise.addTicket(ticket);
        //return ticket;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/deleteTicket", method = RequestMethod.POST)
    public void deleteTicket(@RequestBody Ticket ticket) {
        ticket.setUser(userController.getCurrentUser());
        ticketServise.deleteTicket(ticket);
    }


}

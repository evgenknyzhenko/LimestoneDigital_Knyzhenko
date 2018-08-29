package app.controller;

import app.model.Ticket;
import app.model.User;
import app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    private User currentUser;
    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/addUser", method = RequestMethod.POST)
    public User addUser(@RequestBody User user) {
        user = userService.addUser(user);
        currentUser = user;
        return user;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/tickets", method = RequestMethod.GET)
    public List<Ticket> getTickets() {
        return userService.getUser(currentUser.getId()).getTickets();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/checkUser", method = RequestMethod.POST)
    public User checkUser(@RequestBody User user) {
        user = userService.getUser(user.getName(), user.getPassword());
        currentUser = user;
        return user;
    }

    public User getCurrentUser() {
        return currentUser;
    }
}
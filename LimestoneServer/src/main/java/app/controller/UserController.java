package app.controller;

import app.model.Ticket;
import app.model.User;
import app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    private static Long ID;
    private static User currentUser;

    @Autowired
    private UserService userService;

    /*@RequestMapping(path = "/users", method = RequestMethod.GET)
    public List<User> allUsers() {
        return userService.getAll();
    }*/

    /*@RequestMapping(path = "/user", method = RequestMethod.GET)
    public User getUser() {
        return userService.getUser(1L);
    }*/

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/addUser", method = RequestMethod.POST)
    public User addUser(@RequestBody User user) {
        System.out.println(user.getName() + " " + user.getPassword());

        user = userService.addUser(user);
        currentUser = user;
        ID = user.getId();
        System.out.println(ID);
        return user;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/tickets", method = RequestMethod.GET)
    public List<Ticket> getTickets() {
        return userService.getUser(ID).getTickets();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/checkUser", method = RequestMethod.POST)
    public User checkUser(@RequestBody User user) {
        user = userService.getUser(user.getName(), user.getPassword());
        System.out.println(user.getId() + "idddd");
        System.out.println(user.getName() + " " + user.getPassword());
        user = userService.addUser(user);
        ID = user.getId();
        currentUser = user;
        System.out.println(ID);
        return user;
    }

    public static Long getId() {
        return ID;
    }

    public static User getCurrentUser() {
        return currentUser;
    }
}

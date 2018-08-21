package app.controller;

import app.model.User;
import app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(path = "/users", method = RequestMethod.GET)
    public List<User> allUsers() {
        return userService.getAll();
    }

    @RequestMapping(path = "/user", method = RequestMethod.GET)
    public User getUser() {
        return userService.getUser(2L);
    }
}

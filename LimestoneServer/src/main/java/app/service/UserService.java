package app.service;

import app.model.User;

import java.util.List;

public interface UserService {
    List<User> getAll();

    User addUser(User user);

    User getUser(long id);

    User getUser(String name, String password);
}

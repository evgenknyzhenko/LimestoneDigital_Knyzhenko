package app.service;

import app.dao.UserRepository;
import app.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAll() {
        return userRepository.findAll();
    }

    /*public User getUser(long id) {
        return userRepository.findOne(id);
    }*/

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public User getUser(long id) {
        return userRepository.findOne(id);
    }

    public User getUser(String name, String password) {
        return userRepository.findByNameAndPassword(name, password);
    }
}

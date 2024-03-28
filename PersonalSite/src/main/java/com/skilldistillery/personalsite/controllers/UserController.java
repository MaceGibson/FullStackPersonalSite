package com.skilldistillery.personalsite.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.personalsite.entities.User;
import com.skilldistillery.personalsite.services.UserService;

@RestController
@CrossOrigin({ "*", "http://localhost/" })
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;
    
    @Autowired
    private PasswordEncoder passwordEncoder;

    // Update user
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") int id, @RequestBody User user) {
        // Optional: Add check to ensure that the logged-in user is updating only their own profile
        User updatedUser = userService.updateUser(id, user);
        if(updatedUser != null) {
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Update password
    @PutMapping("/{id}/password")
    public ResponseEntity<?> updatePassword(@PathVariable("id") int id, @RequestBody String newPassword) {
        // Optional: Add security checks as needed
        User user = userService.findUserById(id);
        if(user != null) {
            user.setPassword(passwordEncoder.encode(newPassword));
            userService.save(user); // Assuming a method in your UserService to save the user
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

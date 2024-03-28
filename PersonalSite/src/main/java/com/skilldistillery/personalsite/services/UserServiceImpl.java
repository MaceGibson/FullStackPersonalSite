package com.skilldistillery.personalsite.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.skilldistillery.personalsite.entities.User;
import com.skilldistillery.personalsite.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public User updateUser(int id, User user) {
        User existingUser = userRepo.findById(id).orElse(null);
        if (existingUser != null) {
            existingUser.setUsername(user.getUsername());
            existingUser.setFirstName(user.getFirstName());
            existingUser.setLastName(user.getLastName());
            existingUser.setEmail(user.getEmail());
            existingUser.setEnabled(user.isEnabled());
            existingUser.setRole(user.getRole());
            userRepo.save(existingUser);
            return existingUser;
        }
        return null;
    }

	@Override
	public User findUserById(int id) {
		return userRepo.findById(id).orElse(null);
	}

	@Override
	public User save(User user) {
		return userRepo.save(user);
	}

}

package com.skilldistillery.personalsite.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.personalsite.entities.User;
import com.skilldistillery.personalsite.repositories.UserRepository;

@Service
public class AuthServiceImpl implements AuthService {

	@Autowired
	private UserRepository userRepo;

	@Override
	public User getUserByUsername(String username) {
		return userRepo.findByUsername(username);
	}
}
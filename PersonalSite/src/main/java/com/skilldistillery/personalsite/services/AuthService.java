package com.skilldistillery.personalsite.services;

import com.skilldistillery.personalsite.entities.User;

public interface AuthService {
	public User getUserByUsername(String username);
}

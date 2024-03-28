package com.skilldistillery.personalsite.services;

import com.skilldistillery.personalsite.entities.User;

public interface UserService {
	User updateUser(int id, User user);
	User findUserById(int id);
	User save(User user);
}

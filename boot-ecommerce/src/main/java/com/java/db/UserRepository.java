package com.java.db;

import org.springframework.data.jpa.repository.JpaRepository;
import com.java.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
	public User findByNameAndPassword(String name, String password);
}

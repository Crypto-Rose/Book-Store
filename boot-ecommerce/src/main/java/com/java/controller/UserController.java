package com.java.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.db.UserRepository;
import com.java.model.User;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "users")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/get")
	public List<User> getUsers(){
		return userRepository.findAll();
	}
	
	@PostMapping("/add")
	public void createUser(@RequestBody User user) {		
		userRepository.save(user);
	}
	
	@DeleteMapping(path= { "/{id}" })
	public User deleteUser(@PathVariable("id") long id) {
		User user = userRepository.getOne(id);
		userRepository.deleteById(id);
		return user;
	}
	
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception {
		User usrObj = null;
		String tempName = user.getName();
		String tempPass = user.getPassword();
		if(tempName != null && tempPass != null) {
			usrObj = userRepository.findByNameAndPassword(tempName, tempPass);
		}
		if(usrObj == null) {
			throw new Exception("Bad credentials");
		}
		return usrObj;
	}

}
package com.fyp.accident_monitor.controller;

import com.fyp.accident_monitor.Entities.User;
import com.fyp.accident_monitor.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

/**
 * Created by Asus on 3/20/2020.
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServices userServices;

    @RequestMapping(value = "/getuserbyid/{userid}", method = RequestMethod.GET)
    public User getUserDetailsById(@PathVariable(name = "userid") Integer userid) throws NoSuchElementException {
        return userServices.getUserDetailsById(userid);

    }

    @RequestMapping(value = "/getuserbyname/{username}", method = RequestMethod.GET)
    public User getUserDetailsByName(@PathVariable(name = "username") String userName) throws NoSuchElementException {
        return userServices.getUserDetailsByName(userName);

    }

    @PostMapping(path = "/usersignup",consumes = "application/json",produces = "application/json")
    public User requestUserSignup(@RequestBody User user){
        return  userServices.saveUserRegRequest(user);
    }
}

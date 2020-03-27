package com.fyp.accident_monitor.controller;

import com.fyp.accident_monitor.Entities.RoleAssignment;

import java.util.Base64;

import com.fyp.accident_monitor.Entities.User;
import com.fyp.accident_monitor.services.UserServices;
import jdk.nashorn.internal.ir.RuntimeNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.annotation.security.RolesAllowed;
import java.net.Authenticator;
import java.sql.SQLException;
import java.util.List;
import java.util.NoSuchElementException;

/**
 * Created by Asus on 3/20/2020.
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServices userServices;

    //    @PreAuthorize("hasAnyRole('Admin')")
    @RequestMapping(value = "/getuserbyid/{userid}", method = RequestMethod.GET)
    public User getUserDetailsById(@PathVariable(name = "userid") Integer userid) throws NoSuchElementException {
        User retUser= userServices.getUserDetailsById(userid);

        System.out.println("ddddddd");
        return retUser;


    }

    @RequestMapping(value = "/getuserbyname/{username}", method = RequestMethod.GET)
    public User getUserDetailsByName(@PathVariable(name = "username") String userName) throws NoSuchElementException {
        return userServices.getUserDetailsByName(userName);

    }

    @PostMapping(path = "/usersignup", consumes = "application/json", produces = "application/json")
    public User requestUserSignup(@RequestBody User user) {
        return userServices.saveUserRegRequest(user);
    }

    @PostMapping(path = "/roleassign", consumes = "application/json", produces = "application/json")
    public int assignRoles(@RequestBody RoleAssignment roleAssignment) throws SQLException {
        return userServices.assignRolesToUser(roleAssignment);
    }


}

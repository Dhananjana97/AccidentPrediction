package com.fyp.accident_monitor.controller;

import com.fyp.accident_monitor.Entities.*;

import java.util.*;

import com.fyp.accident_monitor.services.SecurityServices;
import com.fyp.accident_monitor.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpServletRequest;
import java.sql.SQLException;

/**
 * Created by Asus on 3/20/2020.
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServices userServices;

    @Autowired
    private SecurityServices securityServices;


    @RequestMapping(value = "/getuserbyid/{userid}", method = RequestMethod.GET)
    public User getUserDetailsById(@PathVariable(name = "userid") String userid, HttpServletRequest request) throws NoSuchElementException, Exception {

        User retUser = null;

        String[] authorizedRoleNames = new String[]{"Admin"};
        if (securityServices.checkAuthorization(request, authorizedRoleNames)) {
            retUser = userServices.getUserDetailsById(userid);
        }

        return retUser;

    }

    @RequestMapping(value = "/getuserbyname/{username}", method = RequestMethod.GET)
    public User getUserDetailsByName(@PathVariable(name = "username") String userName) throws NoSuchElementException {
        return userServices.getUserDetailsByName(userName);

    }

    @PostMapping(path = "/usersignup", consumes = "application/json", produces = "application/json")
    public User requestUserSignup(@RequestBody User user, HttpServletRequest request) {
        JwtPayload payload = securityServices.getJwtPayload(request);
        user.setEmailAddress(payload.getEmail());
       // user.setUserId(payload.getUserId());
        return userServices.saveUserRegRequest(user);
    }

    @PostMapping(path = "/roleassign", consumes = "application/json", produces = "application/json")
    public @ResponseBody Response assignRoles(@RequestBody RoleAssignment roleAssignment, HttpServletRequest request) throws SQLException, Exception {

        String[] authorizedRoleNames = new String[]{"Guest"};
        Response response = new Response();
        if (securityServices.checkAuthorization(request, authorizedRoleNames)) {
            int success = userServices.assignRolesToUser(roleAssignment);
            if (success == 1) {
                response.setMessage("Roles Assigned Successfully");
            } else {
                response.setMessage("Roles Assignment Failed");
            }
        }
        return response;
    }


    @RequestMapping(path = "/approveUser", consumes = "application/json", produces = "application/json", method = RequestMethod.PUT)
    public @ResponseBody Response approveUser(@RequestBody User user, HttpServletRequest request) throws Exception, SQLException {

        String[] authorizedRoleNames = new String[]{"Admin"};
        Response response = new Response();
        if (securityServices.checkAuthorization(request, authorizedRoleNames)) {
            int success = userServices.approveUser(user.getUserId());
            if (success == 1) {
                response.setMessage("User Approved Successfully");
            } else {
                response.setMessage("Approval Failed");
            }
        }
        return response;
    }


}

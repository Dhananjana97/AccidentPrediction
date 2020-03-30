package com.fyp.accident_monitor.controller;

import com.fyp.accident_monitor.Entities.*;

import java.util.*;

import com.fyp.accident_monitor.services.SecurityServices;
import com.fyp.accident_monitor.services.UserServices;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.HandlerMapping;


import javax.servlet.http.HttpServletRequest;
import java.sql.SQLException;
import java.util.logging.Logger;

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
    public User getAnyUserDetailsById(@PathVariable(name = "userid") String userid, HttpServletRequest request) throws NoSuchElementException, Exception {
        User retUser = null;
        String authorizedPrivCode = "VIEW.ANY.USER.DETAILS";
        if (securityServices.checkAuthorization(request, authorizedPrivCode)) {
            retUser = userServices.getUserDetailsById(userid);
        }
        return retUser;
    }

    @RequestMapping(value = "/getmebyid", method = RequestMethod.GET)
    public User getUserDetailsById(HttpServletRequest request) throws NoSuchElementException, Exception {
        JwtPayload payload = securityServices.getJwtPayload(request);
        User retUser = userServices.getUserDetailsById(payload.getUser_id());
        return retUser;
    }

    @RequestMapping(value = "/getuserbyname/{username}", method = RequestMethod.GET)
    public User getUserDetailsByName(@PathVariable(name = "username") String userName) throws NoSuchElementException {
        return userServices.getUserDetailsByName(userName);

    }

    @PostMapping(path = "/usersignup", consumes = "application/json", produces = "application/json")
    public User requestUserSignup(@RequestBody User user, HttpServletRequest request) throws SQLException {

        JwtPayload payload = securityServices.getJwtPayload(request);
        user.setEmailAddress(payload.getEmail());
        user.setUserId(payload.getUser_id());
        return userServices.saveUserRegRequest(user);
    }

    @PostMapping(path = "/roleassign", consumes = "application/json", produces = "application/json")
    public @ResponseBody Response assignRoles(@RequestBody RoleAssignment roleAssignment, HttpServletRequest request) throws SQLException, Exception {

        String authorizedPrivCode = "ASSIGN.ROLES";
        Response response = new Response();
        if (securityServices.checkAuthorization(request, authorizedPrivCode)) {
            int success = userServices.assignRolesToUser(roleAssignment);
            if (success == 0) {
                response.setMessage("Roles Assignment Failed");
            } else {
                response.setMessage("Roles Assigned Successfully");
            }
        }
        return response;
    }

    @RequestMapping(path = "/roleremove", consumes = "application/json", produces = "application/json",method = RequestMethod.DELETE)
    public @ResponseBody Response removeRoles(@RequestBody RoleAssignment roleAssignment, HttpServletRequest request) throws SQLException, Exception {

        String authorizedPrivCode = "REMOVE.ROLES";
        Response response = new Response();
        if (securityServices.checkAuthorization(request, authorizedPrivCode)) {
            int success = userServices.removeRolesFromUser(roleAssignment);
            if (success == 0) {
                response.setMessage("Roles Removal Failed");
            } else {
                response.setMessage("Roles Removed Successfully");
            }
        }
        return response;
    }




    @RequestMapping(path = "/approveUser", consumes = "application/json", produces = "application/json", method = RequestMethod.PUT)
    public
    @ResponseBody
    Response approveUser(@RequestBody User user, HttpServletRequest request) throws Exception, SQLException, MailException {

        String authorizedPrivCode = "APPROVE.USER";
        Response response = new Response();
        if (securityServices.checkAuthorization(request, authorizedPrivCode)) {
            int success = userServices.approveUserNNotify(user);
            if (success == 1) {
                response.setMessage("User Approved Successfully");
            } else {
                response.setMessage("Approval Failed");
            }
        }
        return response;
    }

    @RequestMapping(value = "/updateuser", method = RequestMethod.PUT)
    public User updateUser(@RequestBody User user, HttpServletRequest request) throws NoSuchElementException, Exception {
        User updatedUser = null;
        String authorizedPrivCode = "UPDATE.USER";
        if (securityServices.checkAuthorization(request, authorizedPrivCode)) {
            updatedUser = userServices.updateUser(user);
        }
        return updatedUser;
    }


}

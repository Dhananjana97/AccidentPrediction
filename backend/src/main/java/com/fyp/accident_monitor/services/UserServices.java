package com.fyp.accident_monitor.services;

import com.fyp.accident_monitor.Entities.RoleAssignment;
import com.fyp.accident_monitor.Entities.User;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.sql.SQLException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

/**
 * Created by Asus on 3/20/2020.
 */

@Service
public interface UserServices {


    User getUserDetailsById(String userid) throws NoSuchElementException;

    List<User> getAllUsersApproved(int status, HttpServletRequest request);

    User getUserDetailsByName(String name) throws NoSuchElementException;

    User saveUserRegRequest(User user) throws SQLException;

    int assignRolesToUser(RoleAssignment roleAssignment) throws SQLException;

    int disableUser(String userId);


    int removeRolesFromUser(RoleAssignment roleAssignment) throws SQLException;

    int approveUserNNotify(User user) throws SQLException;

    User updateUser(User user);

}


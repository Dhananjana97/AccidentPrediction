package com.fyp.accident_monitor.services;

import com.fyp.accident_monitor.Entities.RoleAssignment;
import com.fyp.accident_monitor.Entities.User;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.NoSuchElementException;
import java.util.Optional;

/**
 * Created by Asus on 3/20/2020.
 */

@Service
public interface UserServices {


    User getUserDetailsById(String userid) throws NoSuchElementException;

    User getUserDetailsByName(String name) throws NoSuchElementException;

    User saveUserRegRequest(User user);

    int assignRolesToUser(RoleAssignment roleAssignment)throws SQLException;

    int approveUser(String userid) throws SQLException;

    void notifyUser(String emailAddress);

}


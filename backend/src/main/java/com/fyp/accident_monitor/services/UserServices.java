package com.fyp.accident_monitor.services;

import com.fyp.accident_monitor.Entities.User;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;
import java.util.Optional;

/**
 * Created by Asus on 3/20/2020.
 */

@Service
public interface UserServices {


    User getUserDetailsById(Integer userid) throws NoSuchElementException;

    User getUserDetailsByName(String name) throws NoSuchElementException;

    User saveUserRegRequest(User user);

}


package com.fyp.accident_monitor.services;

import com.fyp.accident_monitor.Dao.UserDao;
import com.fyp.accident_monitor.Dao.UserJdbcDao;
import com.fyp.accident_monitor.Entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.NoSuchElementException;
import java.util.Optional;

/**
 * Created by Asus on 3/20/2020.
 */
@Service
public class UserServicesImpl implements UserServices {

    @Autowired
    private UserDao userDao;

    @Autowired
    private UserJdbcDao userJdbcDao;


    @Transactional
    @Override
    public User getUserDetailsById(Integer userid)throws NoSuchElementException{
        return userDao.findById(userid).orElseThrow(()->new NoSuchElementException("NO object found"));
    }


//    @Override
//    public User getUserDetailsById(Integer userid)throws NoSuchElementException{
//        return userJdbcDao.getUserById(userid);
//    }




    @Transactional
    @Override
    public User getUserDetailsByName(String name) throws NoSuchElementException {
        return userJdbcDao.getUserByName(name);
    }

    @Transactional
    @Override
    public User saveUserRegRequest(User user) {
        user.setStatus(0);
        User savedUser=userDao.save(user);
        return savedUser;
    }
}

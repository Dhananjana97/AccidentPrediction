package com.fyp.accident_monitor.services;

import com.fyp.accident_monitor.Dao.UserDao;
import com.fyp.accident_monitor.Dao.UserJdbcDao;
import com.fyp.accident_monitor.Entities.Response;
import com.fyp.accident_monitor.Entities.RoleAssignment;
import com.fyp.accident_monitor.Entities.User;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.sql.SQLException;
import java.util.List;
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

    @Autowired
    private NotificationService notificationService;


    @Transactional
    @Override
    public User getUserDetailsById(String userid) throws NoSuchElementException {
        return userDao.findById(userid).orElseThrow(() -> new NoSuchElementException("No user found"));
    }

    @Transactional
    @Override
    public List<User> getAllUsersApproved(int status) throws NoSuchElementException {
        return userDao.findBystatus(status);
    }


    @Transactional
    @Override
    public User getUserDetailsByName(String name) throws NoSuchElementException {
        return userJdbcDao.getUserByName(name);
    }

    @Transactional
    @Override
    public User saveUserRegRequest(User user) throws SQLException {
        user.setStatus(0);
        User savedUser = userDao.save(user);
        return savedUser;
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public int assignRolesToUser(RoleAssignment roleAssignment) throws SQLException {
        int success = 0;
        for (String roleName : roleAssignment.getAssigningRoleName()) {
            success = userJdbcDao.saveRoleAssignment(roleAssignment.getRoleAssigningUserId(), roleName);
            if (success == 0) {
                throw new SQLException("Role Assignment Failed Please Check Whether User is Approved or Not");
            }
        }
        return success;
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public int removeRolesFromUser(RoleAssignment roleAssignment) throws SQLException {
        int success = 0;
        for (String roleName : roleAssignment.getRemovingRoles()) {
            success = userJdbcDao.saveRoleRemoval(roleAssignment.getRoleAssigningUserId(), roleName);
            if (success == 0) {
                throw new SQLException("Role Removal Failed");
            }
        }
        return success;
    }


    @Transactional
    @Override
    public int approveUserNNotify(User fuser) throws SQLException, MailException {

        int success = userJdbcDao.approveUser(fuser.getUserId());
        if (success == 1) {
            User retUser = userDao.findById(fuser.getUserId()).orElse(null);
            if (retUser.getEmailAddress() != null) {
                notificationService.sendNotification(retUser);
            }

        }

        return success;
    }

    @Transactional
    @Override
    public User updateUser(User user) {
        User updatedUser = userDao.save(user);
        return updatedUser;

    }


}

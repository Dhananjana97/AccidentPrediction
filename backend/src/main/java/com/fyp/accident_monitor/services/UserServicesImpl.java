package com.fyp.accident_monitor.services;

import com.fyp.accident_monitor.Dao.RoleDao;
import com.fyp.accident_monitor.Dao.UserDao;
import com.fyp.accident_monitor.Dao.UserJdbcDao;
import com.fyp.accident_monitor.Dao.UserRoleDao;
import com.fyp.accident_monitor.Entities.*;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.hibernate.exception.DataException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.orm.jpa.JpaSystemException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.servlet.http.HttpServletRequest;
import java.sql.SQLException;
import java.util.*;

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
    private UserRoleDao userRoleDao;

    @Autowired
    private SecurityServices securityServices;

    @Autowired
    private RoleDao roleDao;

    @Autowired
    private NotificationService notificationService;


    @Transactional
    @Override
    public User getUserDetailsById(String userid) throws NoSuchElementException {
        return userDao.findById(userid).orElseThrow(() -> new NoSuchElementException("No user found"));
    }

    @Transactional
    @Override
    public List<User> getAllUsersApproved(int status, HttpServletRequest request) throws NoSuchElementException {
        List<User> approvedUsers = userDao.findBystatus(status);
        JwtPayload loggedAdminJwt = securityServices.getJwtPayload(request);
        approvedUsers.removeIf(user -> Objects.equals(user.getUserId(), loggedAdminJwt.getUser_id()));
        return approvedUsers;
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
    public int removeRolesFromUser(RoleAssignment roleAssignment) throws SQLException, UnsupportedOperationException {
        int success = 0;

        for (String roleName : roleAssignment.getRemovingRoles()) {
            success = userJdbcDao.saveRoleRemoval(roleAssignment.getRoleAssigningUserId(), roleName);
            if (success == 0) {
                throw new SQLException("Role Removal Failed");
            } else {
                if (Objects.equals(roleName, "Guest")) {
                    try {
                        disableUser(roleAssignment.getRoleAssigningUserId());
                    }catch (Exception e){
                        throw new SQLException("User Disable Failure");
                    }

                }
            }
        }


        return success;
    }

    public int disableUser(String userId) {
        int success = userDao.disableUser(userId);

        return success;
    }


    @Transactional
    @Override
    public int approveUserNNotify(User approveUser) throws SQLException, MailException {

        int success = userJdbcDao.approveUser(approveUser.getUserId());

        if (success == 1) {
            RoleAssignment roleAssignment = getRoleAssignmentForGuest(approveUser);
            if (assignRolesToUser(roleAssignment) == 1) {
                User retUser = userDao.findById(approveUser.getUserId()).orElse(null);
                if (retUser.getEmailAddress() != null) {
                    notificationService.sendNotification(retUser);
                }
            }
        }

        return success;
    }

    private RoleAssignment getRoleAssignmentForGuest(User approveUser) {
        RoleAssignment roleAssignment = new RoleAssignment();
        List<String> roles = new ArrayList<String>();
        roles.add("Guest");
        roleAssignment.setRoleAssigningUserId(approveUser.getUserId());
        roleAssignment.setAssigningRoleName(roles);
        return roleAssignment;
    }

    @Transactional
    @Override
    public User updateUser(User user) {
        User updatedUser = userDao.save(user);
        return updatedUser;

    }


}

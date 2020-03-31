package com.fyp.accident_monitor.Dao;

import com.fyp.accident_monitor.Entities.UserRoles;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Asus on 3/31/2020.
 */
public interface UserRoleDao extends JpaRepository<UserRoles,Integer> {

}

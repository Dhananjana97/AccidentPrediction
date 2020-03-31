package com.fyp.accident_monitor.Dao;

import com.fyp.accident_monitor.Entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Asus on 3/31/2020.
 */
public interface RoleDao extends JpaRepository<Role,Integer> {
}

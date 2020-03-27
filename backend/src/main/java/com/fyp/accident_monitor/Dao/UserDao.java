package com.fyp.accident_monitor.Dao;

import com.fyp.accident_monitor.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

/**
 * Created by Asus on 3/20/2020.
 */
public interface UserDao extends JpaRepository<User, Integer> {

    Optional<User> findByName(String username);

}

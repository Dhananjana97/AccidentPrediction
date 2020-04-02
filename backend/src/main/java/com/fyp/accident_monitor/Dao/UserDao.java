package com.fyp.accident_monitor.Dao;

import com.fyp.accident_monitor.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

/**
 * Created by Asus on 3/20/2020.
 */
public interface UserDao extends JpaRepository<User, String> {

    public List<User> findBystatus(int status);

    @Modifying
    @Query("update User u set u.status=0 where u.userId=?1")
    public int disableUser(String userID);



}

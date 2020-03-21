package com.fyp.accident_monitor.Dao;

import com.fyp.accident_monitor.Entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Asus on 3/21/2020.
 */

@Repository
public class UserJdbcDao {

    @Autowired
    NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public User getUserByName(String name){
        Map<String, String> parameters = new HashMap<String, String>();
        parameters.put("name", "%"+name+"%");
         User user=namedParameterJdbcTemplate.queryForObject("Select * From users where name like :name ", parameters,new RowMapper<User>() {
            @Override
            public User mapRow(ResultSet resultSet, int i) throws SQLException {
                User user=new User();
                user.setUser_id(resultSet.getInt("user_id"));
                user.setName(resultSet.getString("name"));

                return user;
            }
        });
        return user;

    }


}

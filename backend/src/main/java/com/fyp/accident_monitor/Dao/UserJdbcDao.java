package com.fyp.accident_monitor.Dao;

import com.fyp.accident_monitor.Entities.Rank;
import com.fyp.accident_monitor.Entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;


import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

/**
 * Created by Asus on 3/21/2020.
 */

@Repository
public class UserJdbcDao {

    @Autowired
    NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public User getUserByName(String name) {
        Map<String, String> parameters = new HashMap<String, String>();
        parameters.put("name", "%" + name + "%");
        User user = namedParameterJdbcTemplate.queryForObject("Select * From users where name like :name ", parameters, new RowMapper<User>() {
            @Override
            public User mapRow(ResultSet resultSet, int i) throws SQLException {
                User user = new User();
                user.setUserId(resultSet.getString("user_id"));
                user.setName(resultSet.getString("name"));

                return user;
            }
        });
        return user;

    }


    public int saveRoleAssignment(String userid, String role) throws SQLException {
        Map<String, String> parameters = new HashMap<String, String>();
        parameters.put("userid", userid);
        parameters.put("roleName", role);

        String sql = "insert into user_role(user_id,role_id)\n" +
                "select user_id,role_id from\n" +
                "users,roles where users.user_id=:userid and roles.role_name=:roleName and users.status=1";
        int assignmentstatus = namedParameterJdbcTemplate.update(sql, parameters);

        return assignmentstatus;
    }

    public int saveRoleRemoval(String userid, String role) throws SQLException {
        Map<String, String> parameters = new HashMap<String, String>();
        parameters.put("userid", userid);
        parameters.put("roleName", role);

        int removeStatus=0;
        String sql = "Delete user_role from users\n" +
                "  inner join user_role on users.user_id=user_role.user_id\n" +
                "  inner join roles on user_role.role_id=roles.role_id\n" +
                "  where users.user_id=:userid and roles.role_name=:roleName";

        removeStatus = namedParameterJdbcTemplate.update(sql, parameters);

        return removeStatus;
    }

    public List<String> getPrivesofUser(String userid) {
        Map<String, String> parameters = new HashMap<String, String>();
        parameters.put("userid", userid);

        String sql = "Select distinct code from users\n" +
                "  inner join user_role on users.user_id=user_role.user_id\n" +
                "  inner join roles on user_role.role_id=roles.role_id\n" +
                "  inner join previledges on user_role.role_id=previledges.role_id\n" +
                "  where users.user_id=:userid";

        List<String> privList = namedParameterJdbcTemplate.query(sql, parameters, new ResultSetExtractor<List<String>>() {
            @Override
            public List<String> extractData(ResultSet resultSet) throws SQLException, DataAccessException {
                List<String> privList = new ArrayList<>();
                while (resultSet.next()) {
                    privList.add(resultSet.getString("code"));
                }
                return privList;
            }
        });

        return privList;
    }

    public int approveUser(String userid) throws SQLException {
        Map<String, String> parameters = new HashMap<String, String>();
        parameters.put("userid", userid);

        String sql = "UPDATE users SET status=1 WHERE user_id =:userid ";

        int approval = namedParameterJdbcTemplate.update(sql, parameters);

        return approval;


    }


}

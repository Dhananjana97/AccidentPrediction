package com.fyp.accident_monitor.Entities;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Asus on 3/20/2020.
 */
@Entity
@Table(name="user_role")
public class UserRoles implements Serializable {

    private static final long serialVersionUID = -776926532133647447L;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer userRoleId;

    private String userId;

    private Integer roleId;

    public Integer getUserRoleId() {
        return userRoleId;
    }

    public void setUserRoleId(Integer userRoleId) {
        this.userRoleId = userRoleId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }
}

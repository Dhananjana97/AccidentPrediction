package com.fyp.accident_monitor.Entities;

import java.io.Serializable;
import java.util.List;

/**
 * Created by Asus on 3/22/2020.
 */
public class RoleAssignment implements Serializable {

    private static final long serialVersionUID = -2811008687103779769L;
    private String roleAssigningUserId;

    private List<String> assigningRoleName;

    private List<String> removingRoles;

    public String getRoleAssigningUserId() {
        return roleAssigningUserId;
    }

    public void setRoleAssigningUserId(String roleAssigningUserId) {
        this.roleAssigningUserId = roleAssigningUserId;
    }

    public List<String> getAssigningRoleName() {
        return assigningRoleName;
    }

    public void setAssigningRoleName(List<String> assigningRoleName) {
        this.assigningRoleName = assigningRoleName;
    }

    public List<String> getRemovingRoles() {
        return removingRoles;
    }

    public void setRemovingRoles(List<String> removingRoles) {
        this.removingRoles = removingRoles;
    }
}

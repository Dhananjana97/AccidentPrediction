package com.fyp.accident_monitor.Entities;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Asus on 3/20/2020.
 */
@Entity
@Table(name = "roles")
public class Role implements Serializable {

    private static final long serialVersionUID = 5985724426889445010L;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer role_id;

    private String roleName;

//    @ManyToMany(mappedBy="roles")
//    private Set<User> users;





    public Integer getRoleId() {
        return role_id;
    }

    public void setRoleId(Integer role_id) {
        this.role_id = role_id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String role_name) {
        this.roleName = role_name;
    }

    public Role(){
        super();
    }

//    public Set<User> getUsers() {
//        return users;
//    }
//
//    public void setUsers(Set<User> users) {
//        this.users = users;
//    }
}

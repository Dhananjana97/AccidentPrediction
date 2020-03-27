package com.fyp.accident_monitor.Entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

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

    private String role_name;

//    @ManyToMany(mappedBy="roles")
//    private Set<User> users;





    public Integer getRole_id() {
        return role_id;
    }

    public void setRole_id(Integer role_id) {
        this.role_id = role_id;
    }

    public String getRole_name() {
        return role_name;
    }

    public void setRole_name(String role_name) {
        this.role_name = role_name;
    }

//    public Set<User> getUsers() {
//        return users;
//    }
//
//    public void setUsers(Set<User> users) {
//        this.users = users;
//    }
}

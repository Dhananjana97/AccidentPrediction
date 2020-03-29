package com.fyp.accident_monitor.Entities;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Asus on 3/20/2020.
 */

@Entity
@Table(name = "previledges")
public class Priviledges implements Serializable {

    private static final long serialVersionUID = 1684283270344558715L;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer privId;

    private Integer roleId;


    private String description;

    public Integer getPrivId() {
        return privId;
    }

    public void setPrivId(Integer privId) {
        this.privId = privId;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

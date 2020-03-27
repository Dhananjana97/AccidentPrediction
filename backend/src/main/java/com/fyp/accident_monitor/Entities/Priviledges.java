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
    private Integer priv_id;

    private Integer role_id;


    private String description;

    public Integer getPriv_id() {
        return priv_id;
    }

    public void setPriv_id(Integer priv_id) {
        this.priv_id = priv_id;
    }

    public Integer getRole_id() {
        return role_id;
    }

    public void setRole_id(Integer role_id) {
        this.role_id = role_id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

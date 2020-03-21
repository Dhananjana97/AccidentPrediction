package com.fyp.accident_monitor.Entities;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Asus on 3/20/2020.
 */

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer user_id;

    private String name;

    @Enumerated(EnumType.STRING)
    private Rank rank;

    private int status;


    public User(Integer user_id, String name) {
        this.user_id = user_id;
        this.name = name;
    }

    public User(){
        super();
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Rank getRank() {
        return rank;
    }

    public void setRank(Rank rank) {
        this.rank = rank;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}

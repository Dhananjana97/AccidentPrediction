package com.fyp.accident_monitor.Entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

/**
 * Created by Asus on 3/20/2020.
 */

@Entity
@Table(name = "users")
public class User implements Serializable {


    private static final long serialVersionUID = 7071708023328006285L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer user_id;
    private String name;
    @Enumerated(EnumType.STRING)
    private Rank rank;
    private int status;

    @ManyToMany(cascade=CascadeType.ALL)
    @JoinTable(name="user_role", joinColumns={@JoinColumn(name="user_id")}
            , inverseJoinColumns={@JoinColumn(name="role_id")})
    private Set<Role> roles;







    public User(User user) {
        this.user_id = user.user_id;
        this.name = user.name;
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


    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}

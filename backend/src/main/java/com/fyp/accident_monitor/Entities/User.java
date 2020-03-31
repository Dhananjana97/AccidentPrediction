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


    private static final long serialVersionUID = -1109266097922296763L;
    @Id
    @Column(name = "user_id")
    private String userId;
    @Column(name = "name")
    private String name;
    @Column(name = "email_address")
    private String emailAddress;
    @Enumerated(EnumType.STRING)
    @Column(name = "rank")
    private Rank rank;
    @Column(name = "status")
    private int status;

    @ManyToMany(cascade=CascadeType.ALL)
    @JoinTable(name="user_role", joinColumns={@JoinColumn(name="userId")}
            , inverseJoinColumns={@JoinColumn(name="roleId")})
    private Set<Role> roles;




    public User(User user) {
        this.userId = user.userId;
        this.name = user.name;
        this.emailAddress =user.emailAddress;
        this.rank=user.rank;
    }

    public User(){
        super();
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
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

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }
}

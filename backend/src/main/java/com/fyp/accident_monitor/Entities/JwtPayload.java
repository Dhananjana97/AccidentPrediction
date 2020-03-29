package com.fyp.accident_monitor.Entities;

/**
 * Created by Asus on 3/27/2020.
 */
public class JwtPayload {

    private String name;
    private String iss;
    private String aud;
    private long auth_time;
    private String userId;
    private String sub;
    private long iat;
    private long exp;
    private String email;
    private boolean email_verified;



//    {
//        "name": "asansandeepa@gmail.com",
//            "iss": "https://securetoken.google.com/accidentpred",
//            "aud": "accidentpred",
//            "auth_time": 1585300599,
//            "userId": "5f05mbGh3Fc95kJlrfeLBLd3ZPq1",
//            "sub": "5f05mbGh3Fc95kJlrfeLBLd3ZPq1",
//            "iat": 1585300599,
//            "exp": 1585304199,
//            "email": "asansandeepa@gmail.com",
//            "email_verified": true,
//            "firebase": {
//        "identities": {
//            "email": [
//            "asansandeepa@gmail.com"
//      ]
//        },
//        "sign_in_provider": "password"
//    }
//    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIss() {
        return iss;
    }

    public void setIss(String iss) {
        this.iss = iss;
    }

    public String getAud() {
        return aud;
    }

    public void setAud(String aud) {
        this.aud = aud;
    }

    public long getAuthTime() {
        return auth_time;
    }

    public void setAuthTime(long auth_time) {
        this.auth_time = auth_time;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getSub() {
        return sub;
    }

    public void setSub(String sub) {
        this.sub = sub;
    }

    public long getIat() {
        return iat;
    }

    public void setIat(long iat) {
        this.iat = iat;
    }

    public long getExp() {
        return exp;
    }

    public void setExp(long exp) {
        this.exp = exp;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isEmailVerified() {
        return email_verified;
    }

    public void setEmail_verified(boolean email_verified) {
        this.email_verified = email_verified;
    }
}

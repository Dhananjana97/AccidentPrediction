package com.fyp.accident_monitor.services;

import com.fyp.accident_monitor.Dao.UserJdbcDao;
import com.fyp.accident_monitor.Entities.JwtPayload;
import com.fyp.accident_monitor.Entities.Role;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.NotAuthorizedException;
import java.util.Base64;
import java.util.List;
import java.util.Set;


/**
 * Created by Asus on 3/27/2020.
 */
@Service
public class SecurityServices {

    @Autowired
    private UserJdbcDao userJdbcDao;

    public JwtPayload getJwtPayload(HttpServletRequest request) {
        String token = request.getHeader("authorization");
        String[] tokArr = token.split("\\.");
        byte[] decodedBytes = Base64.getMimeDecoder().decode(tokArr[1]);
        String decodedPayload = new String(decodedBytes);
        Gson gson = new Gson();
        JwtPayload jwtPayload = gson.fromJson(decodedPayload, JwtPayload.class);
        return jwtPayload;
    }

    public boolean checkAuthorization(HttpServletRequest request, String requiredPriv) throws Exception {

        boolean isAthorized = false;

        JwtPayload payload = getJwtPayload(request);
        List<String> havePrives = getPrivesofUser(payload.getUser_id());

        if (havePrives.contains(requiredPriv)) {
            isAthorized = true;
        } else {
            isAthorized = false;
            throw new Exception("User have no Authorization to use this service ");
        }

        return isAthorized;

    }

    ;

    private List<String> getPrivesofUser(String userid) {
        List<String> roleList = userJdbcDao.getPrivesofUser(userid);
        return roleList;


    }
}

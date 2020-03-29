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

    public boolean checkAuthorization(HttpServletRequest request, String[] requiredroles) throws Exception {

        boolean isAthorized = false;

        JwtPayload payload = getJwtPayload(request);
        //List<String> haveRoles = getRolesofUser(payload.getUserId());
        List<String> haveRoles = getRolesofUser("6");

        for (String role : requiredroles) {
            if (haveRoles.contains(role)) {
                isAthorized = true;
            } else {
                throw new Exception("User have no Authorization to use this service ");
            }

        }
        return isAthorized;

    }

    ;

    private List<String> getRolesofUser(String userid) {
        List<String> roleList = userJdbcDao.getRolesofUser(userid);
        return roleList;


    }
}

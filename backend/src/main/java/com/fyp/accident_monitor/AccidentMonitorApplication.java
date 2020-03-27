package com.fyp.accident_monitor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController

public class AccidentMonitorApplication {

    public static void main(String[] args) {
        SpringApplication.run(AccidentMonitorApplication.class, args);
    }

    @RequestMapping("/getUser")
    public String getString() {
        return "OKKKK";
    }


}

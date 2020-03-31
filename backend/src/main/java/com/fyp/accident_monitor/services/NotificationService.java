package com.fyp.accident_monitor.services;

import com.fyp.accident_monitor.Entities.User;
import javafx.application.Application;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Properties;

/**
 * Created by Asus on 3/29/2020.
 */
@Service
public class NotificationService {

    private JavaMailSender javaMailSender;

    @Autowired
    public NotificationService(JavaMailSender javaMailSender){
        this.javaMailSender=javaMailSender;
    }

    public void sendNotification(User toUser) throws MailException{
        SimpleMailMessage mail=new SimpleMailMessage();
        mail.setTo(toUser.getEmailAddress());
        mail.setFrom("accidentmonitorlk@gmail.com");
        mail.setSubject("Notification of Account Approval");
        mail.setText("Dear Sir,\n Your account has been successfully approved by the administration.\n Now you can use the Accident Monitoring System.");

        javaMailSender.send(mail);

    }
}

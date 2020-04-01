package com.fyp.accident_monitor.controller;

import java.util.NoSuchElementException;

import com.fyp.accident_monitor.services.SecurityServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fyp.accident_monitor.Entities.AccidentData;
import com.fyp.accident_monitor.services.AccidentDataService;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/accident")
public class AccidentDataController {

    @Autowired
    private AccidentDataService accidentDataService;

    @Autowired
    private SecurityServices securityServices;

    @RequestMapping(value = "/insertaccident", method = RequestMethod.POST)
    public AccidentData insertAccident(@RequestBody AccidentData accidentObject, HttpServletRequest request) throws NoSuchElementException, Exception {
        String authorizedPrivCode = "ACCIDENT.INSERT";
        AccidentData accidentData = null;
        if (securityServices.checkAuthorization(request, authorizedPrivCode)) {
            accidentData = accidentDataService.insertAccident(accidentObject);
        }
        return accidentData;
    }

    @RequestMapping(value = "/deleteaccident/{accidentid}", method = RequestMethod.DELETE)
    public AccidentData deleteAccident(@PathVariable(name = "accidentid") Integer id, HttpServletRequest request) throws NoSuchElementException, Exception {
        String authorizedPrivCode = "ACCIDENT.DELETE";
        AccidentData deletedAccidentData = null;
        if (securityServices.checkAuthorization(request, authorizedPrivCode)) {
            deletedAccidentData = accidentDataService.deleteAccident(id);
        }
        return deletedAccidentData;
    }

    @RequestMapping(value = "/getaccidentbyid/{accidentid}", method = RequestMethod.GET)
    public AccidentData getAccidentById(@PathVariable(name = "accidentid") Integer id, HttpServletRequest request) throws NoSuchElementException, Exception {
        String authorizedPrivCode = "ACCIDENT.VIEW";
        AccidentData accidentData = null;
        if (securityServices.checkAuthorization(request, authorizedPrivCode)) {
            accidentData = accidentDataService.getAccidentById(id);
        }
        return accidentData;

    }

    @RequestMapping(value = "/getallaccident/{pagenumber}", method = RequestMethod.GET)
    public Page<AccidentData> getAllAccidents(@PathVariable(name = "pagenumber") int pageNumber, HttpServletRequest request) throws NoSuchElementException, Exception {
        String authorizedPrivCode = "ACCIDENT.VIEW";
        Page<AccidentData> accidentData = null;
        if (securityServices.checkAuthorization(request, authorizedPrivCode)) {
            accidentData = accidentDataService.getAllAccidents(pageNumber-1);
        }
        return accidentData;

    }

    @RequestMapping(value = "/getaccidentsbyfilter/{pagenumber}", method = RequestMethod.POST)
    public Page<AccidentData> getAllAccidentsByDateNType(@PathVariable(name = "pagenumber") int pagenumber,@RequestBody AccidentData accidentDataReq, HttpServletRequest request) throws NoSuchElementException, Exception {
        String authorizedPrivCode = "ACCIDENT.VIEW";
        Page<AccidentData> accidentData = null;
        if (securityServices.checkAuthorization(request, authorizedPrivCode)) {
            accidentData = accidentDataService.getAccidentsByDateNType(accidentDataReq,pagenumber);
        }
        return accidentData;

    }

    @RequestMapping(value = "/updateaccident", method = RequestMethod.PUT)
    public AccidentData updateAccident(@RequestBody AccidentData accidentObject, HttpServletRequest request) throws NoSuchElementException, Exception {
        String authorizedPrivCode = "ACCIDENT.UPDATE";
        AccidentData updatedAccidentData = null;
        if (securityServices.checkAuthorization(request, authorizedPrivCode)) {
            updatedAccidentData = accidentDataService.updateAccident(accidentObject);
        }
        return updatedAccidentData;
    }
}

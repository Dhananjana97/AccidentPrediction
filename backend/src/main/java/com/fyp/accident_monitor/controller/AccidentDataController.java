package com.fyp.accident_monitor.controller;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fyp.accident_monitor.Entities.AccidentData;
import com.fyp.accident_monitor.services.AccidentDataService;

@RestController
@RequestMapping("/accident")
public class AccidentDataController {
	
	@Autowired
	private AccidentDataService accidentDataService;
	
	 @RequestMapping(value = "/insertaccident", method = RequestMethod.POST)
	 public AccidentData insertAccident(@RequestBody AccidentData accidentObject) throws NoSuchElementException {
	   return accidentDataService.insertAccident(accidentObject);
	 }
	 
	 @RequestMapping(value = "/deleteaccident/{accidentid}", method = RequestMethod.DELETE)
	 public AccidentData deleteAccident(@PathVariable(name = "accidentid") Integer id) throws NoSuchElementException {
	   return accidentDataService.deleteAccident(id);
	 }
	 
	 @RequestMapping(value = "/getaccidentbyid/{accidentid}", method = RequestMethod.GET)
	 public AccidentData getAccidentById(@PathVariable(name = "accidentid") Integer id) throws NoSuchElementException {
	   return accidentDataService.getAccidentById(id);
	 }
	
	 @RequestMapping(value = "/updateaccident", method = RequestMethod.PUT)
	 public AccidentData updateAccident(@RequestBody AccidentData accidentObject) throws NoSuchElementException {
	   return accidentDataService.updateAccident(accidentObject);
	 }
}

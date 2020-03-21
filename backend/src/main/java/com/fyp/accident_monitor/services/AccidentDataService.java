package com.fyp.accident_monitor.services;

import org.springframework.stereotype.Service;

import com.fyp.accident_monitor.Entities.AccidentData;

@Service
public interface AccidentDataService {
	
	AccidentData insertAccident(AccidentData object);
	
	AccidentData deleteAccident(Integer id);
	
	AccidentData updateAccident(AccidentData object);
	
	AccidentData getAccidentById(Integer id);
	
}

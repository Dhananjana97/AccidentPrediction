package com.fyp.accident_monitor.services;

import com.fyp.accident_monitor.Entities.AccidentFilter;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.fyp.accident_monitor.Entities.AccidentData;

import java.util.List;

@Service
public interface AccidentDataService {
	
	AccidentData insertAccident(AccidentData object);
	
	AccidentData deleteAccident(Integer id);
	
	AccidentData updateAccident(AccidentData object);
	
	AccidentData getAccidentById(Integer id);

	Page<AccidentData> getAllAccidents(int pageNumber);

	Page<AccidentData> getAccidentsByDateNType(AccidentFilter accidentData);

	
}

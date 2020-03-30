package com.fyp.accident_monitor.services;

import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fyp.accident_monitor.Dao.AccidentDataDao;
import com.fyp.accident_monitor.Entities.AccidentData;



@Service
public class AccidentDataServiceImpl implements AccidentDataService{
	
	@Autowired
	private AccidentDataDao accidentDataDao;
	
	@Transactional
	@Override
	public AccidentData insertAccident(AccidentData object) {
		AccidentData savedObject = accidentDataDao.save(object);
		return savedObject;
	}

	@Override
	public AccidentData deleteAccident(Integer id) {
		Optional<AccidentData> dataObject = accidentDataDao.findById(id);
		accidentDataDao.delete(dataObject.get());
		return dataObject.get();
	}
	
	@Transactional
	@Override
	public AccidentData updateAccident(AccidentData object) {
		AccidentData updatedObject = accidentDataDao.save(object);
		return updatedObject;
	}

	@Override
	public AccidentData getAccidentById(Integer id) {
		return accidentDataDao.findById(id).orElseThrow(()->new NoSuchElementException("No accident record found"));
	}
	
	
}

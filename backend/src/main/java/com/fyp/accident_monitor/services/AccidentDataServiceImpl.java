package com.fyp.accident_monitor.services;

import java.util.NoSuchElementException;
import java.util.Optional;

import com.fyp.accident_monitor.Entities.AccidentFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fyp.accident_monitor.Dao.AccidentDataDao;
import com.fyp.accident_monitor.Entities.AccidentData;


@Service
public class AccidentDataServiceImpl implements AccidentDataService {

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
        return accidentDataDao.findById(id).orElseThrow(() -> new NoSuchElementException("No accident record found"));
    }

    @Override
    public Page<AccidentData> getAllAccidents(int pageNumber) {
        int pageSize = 20;
        Pageable page = PageRequest.of(pageNumber, pageSize);
        return accidentDataDao.findAll(page);
    }

    @Override
    public Page<AccidentData> getAccidentsByDateNType(AccidentFilter accidentData) {
        int pageSize = 20;
        Pageable page = PageRequest.of(accidentData.getPageNumber()-1, pageSize);
        Page<AccidentData> result=null;
        if (accidentData.getDate() != null && accidentData.getCity() == null) {
            result=accidentDataDao.findByDate(accidentData.getDate(), page);
        } else if (accidentData.getDate() == null && accidentData.getCity() != null) {
           result= accidentDataDao.findByCity(accidentData.getCity(), page);
        } else if (accidentData.getDate() != null && accidentData.getCity() != null) {
           result= accidentDataDao.findByDateNCity(accidentData.getDate(), accidentData.getCity(), page);
        } else {
            result=accidentDataDao.findAll(page);
        }

        return result;
    }
}

package com.fyp.accident_monitor.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fyp.accident_monitor.Entities.AccidentData;

public interface AccidentDataDao extends JpaRepository<AccidentData, Integer>{
	
}

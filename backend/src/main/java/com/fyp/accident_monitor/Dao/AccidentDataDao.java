package com.fyp.accident_monitor.Dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.fyp.accident_monitor.Entities.AccidentData;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AccidentDataDao extends JpaRepository<AccidentData, Integer>{

    @Query("select acc from AccidentData acc where date= ?1 and city= ?2")
    public Page<AccidentData> findByDateNCity(String date, String city, Pageable pageable);

    @Query("select acc from AccidentData acc where date like ?1%")
    public Page<AccidentData> findByDate(String date,Pageable pageable);

    public Page<AccidentData> findByCity(String city, Pageable pageable);


}

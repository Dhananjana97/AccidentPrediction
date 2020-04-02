package com.fyp.accident_monitor.Dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.fyp.accident_monitor.Entities.AccidentData;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AccidentDataDao extends JpaRepository<AccidentData, Integer>{

    @Query("select acc from AccidentData acc where acc.date like ?1% and acc.city like %?2%")
    public Page<AccidentData> findByDateNCity(String date, String city, Pageable pageable);

    @Query("select acc from AccidentData acc where date like ?1%")
    public Page<AccidentData> findByDate(String date,Pageable pageable);

    @Query("select acc from AccidentData acc where city like %?1%")
    public Page<AccidentData> findByCity(String city, Pageable pageable);


}

package com.fyp.accident_monitor.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Accident_Data")
public class AccidentData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int no_of_vehicles;
    private String date;
    private String time;

    @Column(name = "1st_road_class")
    private String _1st_road_class;

    private String road_surface;
    private String lightning_conditions;
    private String weather;


    private String severity;
    private Integer no_of_male;
    private Integer no_of_female;


    private Integer affected_drivers;
    private Integer affected_pedestrians;
    private Integer affected_passengers;
    private String vehicleType;
    private String city;
    private boolean holiday;

    public AccidentData() {
        super();
    }

    public AccidentData(int id,
                        int no_of_vehicles, String date, String time, String _1st_road_class, String road_surface,
                        String lightning_conditions, String weather, String severity, int affected_drivers, int affected_passengers,
                        int affected_pedestrians, Integer no_of_male, Integer no_of_female, String vehicle_type, String city, boolean holiday) {
        super();
        this.id = id;
        this.no_of_vehicles = no_of_vehicles;
        this.date = date;
        this.time = time;
        this._1st_road_class = _1st_road_class;
        this.road_surface = road_surface;
        this.lightning_conditions = lightning_conditions;
        this.weather = weather;
        this.severity = severity;
        this.no_of_male = no_of_male;
        this.no_of_female = no_of_female;
        this.affected_drivers = affected_drivers;
        this.affected_passengers = affected_passengers;
        this.affected_pedestrians = affected_pedestrians;
        this.vehicleType = vehicle_type;
        this.city = city;
        this.holiday = holiday;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getNo_of_vehicles() {
        return no_of_vehicles;
    }

    public void setNo_of_vehicles(int no_of_vehicles) {
        this.no_of_vehicles = no_of_vehicles;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String get_1st_road_class() {
        return _1st_road_class;
    }

    public void set_1st_road_class(String _1st_road_class) {
        this._1st_road_class = _1st_road_class;
    }

    public String getRoad_surface() {
        return road_surface;
    }

    public void setRoad_surface(String road_surface) {
        this.road_surface = road_surface;
    }

    public String getLightning_conditions() {
        return lightning_conditions;
    }

    public void setLightning_conditions(String lightning_conditions) {
        this.lightning_conditions = lightning_conditions;
    }

    public String getWeather() {
        return weather;
    }

    public void setWeather(String weather) {
        this.weather = weather;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }


    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public boolean isHoliday() {
        return holiday;
    }

    public void setHoliday(boolean holiday) {
        this.holiday = holiday;
    }


    public Integer getAffected_drivers() {
        return affected_drivers;
    }

    public void setAffected_drivers(Integer affected_drivers) {
        this.affected_drivers = affected_drivers;
    }

    public Integer getAffected_pedestrians() {
        return affected_pedestrians;
    }

    public void setAffected_pedestrians(Integer affected_pedestrians) {
        this.affected_pedestrians = affected_pedestrians;
    }

    public Integer getAffected_passengers() {
        return affected_passengers;
    }

    public void setAffected_passengers(Integer affected_passengers) {
        this.affected_passengers = affected_passengers;
    }

    public String getSeverity() {
        return severity;
    }

    public void setSeverity(String severity) {
        this.severity = severity;
    }

    public Integer getNo_of_male() {
        return no_of_male;
    }

    public void setNo_of_male(Integer no_of_male) {
        this.no_of_male = no_of_male;
    }

    public Integer getNo_of_female() {
        return no_of_female;
    }

    public void setNo_of_female(Integer no_of_female) {
        this.no_of_female = no_of_female;
    }
}

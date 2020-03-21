package com.fyp.accident_monitor.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Accident_Data")
public class AccidentData {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String reference_number;
	private String grid_ref_easting;
	private String grid_ref_northing;
	
	private int no_of_vehicles;
	private String date;
	private String time;
	
	@Column(name="1st_road_class")
	private String _1st_road_class;
	private String road_surface;
	private String lightning_conditions;
	private String weather;
	private String casualty;
	
	@Column(name="class")
	private String _class;
	
	private String casualty_severity;
	private String sex_of_casualty;
	private String age_of_casualty;
	private String vehicle_type;
	
	public AccidentData() {
		super();
	}
	
	public AccidentData(int id, String reference_number, String grid_ref_easting, String grid_ref_northing,
			int no_of_vehicles, String date, String time, String _1st_road_class, String road_surface,
			String lightning_conditions, String weather, String casualty, String _class, String causalty_severity,
			String sex_of_casualty, String age_of_casualty, String vehicle_type) {
		super();
		this.id = id;
		this.reference_number = reference_number;
		this.grid_ref_easting = grid_ref_easting;
		this.grid_ref_northing = grid_ref_northing;
		this.no_of_vehicles = no_of_vehicles;
		this.date = date;
		this.time = time;
		this._1st_road_class = _1st_road_class;
		this.road_surface = road_surface;
		this.lightning_conditions = lightning_conditions;
		this.weather = weather;
		this.casualty = casualty;
		this._class = _class;
		this.casualty_severity = causalty_severity;
		this.sex_of_casualty = sex_of_casualty;
		this.age_of_casualty = age_of_casualty;
		this.vehicle_type = vehicle_type;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getReference_number() {
		return reference_number;
	}
	public void setReference_number(String reference_number) {
		this.reference_number = reference_number;
	}
	public String getGrid_ref_easting() {
		return grid_ref_easting;
	}
	public void setGrid_ref_easting(String grid_ref_easting) {
		this.grid_ref_easting = grid_ref_easting;
	}
	public String getGrid_ref_northing() {
		return grid_ref_northing;
	}
	public void setGrid_ref_northing(String grid_ref_northing) {
		this.grid_ref_northing = grid_ref_northing;
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
	public String getCasualty() {
		return casualty;
	}
	public void setCasualty(String casualty) {
		this.casualty = casualty;
	}
	public String get_class() {
		return _class;
	}
	public void set_class(String _class) {
		this._class = _class;
	}
	public String getCausalty_severity() {
		return casualty_severity;
	}
	public void setCausalty_severity(String causalty_severity) {
		this.casualty_severity = causalty_severity;
	}
	public String getSex_of_casualty() {
		return sex_of_casualty;
	}
	public void setSex_of_casualty(String sex_of_casualty) {
		this.sex_of_casualty = sex_of_casualty;
	}
	public String getAge_of_casualty() {
		return age_of_casualty;
	}
	public void setAge_of_casualty(String age_of_casualty) {
		this.age_of_casualty = age_of_casualty;
	}
	public String getVehicle_type() {
		return vehicle_type;
	}
	public void setVehicle_type(String vehicle_type) {
		this.vehicle_type = vehicle_type;
	}
	
	
}

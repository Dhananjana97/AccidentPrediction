package com.fyp.accident_monitor.Entities;

/**
 * Created by Asus on 4/1/2020.
 */
public class AccidentFilter {

    private String city;
    private String date;
    private int pageNumber;

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }


    public int getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
    }
}

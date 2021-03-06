import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AccidenteditdialogComponent } from '../dialogs/accidenteditdialog/accidenteditdialog.component';
import { RestService } from 'src/app/services/rest/rest.service';
import { AreyousureComponent } from '../dialogs/areyousure/areyousure.component';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'accidentdetails',
  templateUrl: './accidentdetails.component.html',
  styleUrls: ['./accidentdetails.component.css']
})
export class AccidentdetailsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private RestService: RestService,
    private SnackBar:SnackbarService
  ) { }

  ngOnInit(): void {
  }

  public accidents;
  public dataSource;
  public data_recieved = false;
  public current_state = {
    city: null,
    pageNumber: null,
    date: null,
    page_tot: null,
    page_array: null
  }

  public getAllAccidents(date, city, page) {
    if (!Number(new Date(date))) {
      if (date == "") { date = null }
      else {this.SnackBar.openSnackBar("Insert correct date input!","error"); return null; }
    }
    if (city == "") { city = null }

    this.RestService.getAllAccidents(date, city, page).subscribe(
      (success) => {
        this.accidents = success["content"];
        this.data_recieved = true;
        this.current_state = { city: city, pageNumber: page, date: date, page_tot: success["totalPages"], page_array: Array.from(Array(success["totalPages"]).keys()).map(x => ++x) }
        if (date == null) { this.current_state.date = "" }
        if (city == null) { this.current_state.city = "" }
        this.dataSource = new MatTableDataSource(this.accidents)
      },
      (error) => {
        console.log(error);
        this.SnackBar.openSnackBar("Accident data cannot be loaded!","error");
      }
    )
  }

  public pagination(page) {
    if (page <= 0) { return null }
    else if (page > this.current_state.page_tot) { return null }
    else { this.getAllAccidents(this.current_state.date, this.current_state.city, page) }
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public delete(uid) {
    let dialogRef = this.dialog.open(AreyousureComponent, { data: "Are you sure want to delete the accident from database?" });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.RestService.deleteAccident(uid).subscribe(
          (success) => {
            this.getAllAccidents(this.current_state.date, this.current_state.city, this.current_state.pageNumber);
            this.SnackBar.openSnackBar("Accident deleted successfully!","success");
          },
          (error) => {
            console.log(error);
            this.SnackBar.openSnackBar("The accident wasn't deleted. Try again!","error");
          }
        )
      }
      else if (result == false) {
        return null;
      }
    });
  }

  public edit(accident_object) {

    let new_object = this.clone(accident_object);
    new_object["date"] = this.dateToForm(new_object["date"]);
    new_object["time"] = this.timeToForm(new_object["time"]);
    let dialogRef = this.dialog.open(AccidenteditdialogComponent, { data: new_object });
    dialogRef.afterClosed().subscribe(result => {


      if (!result) { return null }
      result["date"] = this.dateFromForm(result["date"]);
      result["time"] = this.timeFromForm(result["time"])
      let isFormValid = this.isFormValid(result);
      if (isFormValid != true) { this.SnackBar.openSnackBar(isFormValid.message,"error");
      ; return null }
 
      this.RestService.editAccident(result).subscribe(
        (success) => {
          this.getAllAccidents(this.current_state.date, this.current_state.city, this.current_state.pageNumber);
          this.SnackBar.openSnackBar("The accident successfully edited!","success");
        },
        (error) => {
          console.log(error);
          this.SnackBar.openSnackBar("The accident wasn't edited successfully. Try again!","error");
        }
      )
    });

  }

  public addAccident() {
    let dialogRef = this.dialog.open(AccidenteditdialogComponent, { data: {} });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) { return null }
      result["date"] = this.dateFromForm(result["date"]);
      result["time"] = this.timeFromForm(result["time"])
      let isFormValid = this.isFormValid(result);
      if (isFormValid != true) {this.SnackBar.openSnackBar(isFormValid.message,"error");
      ; return null }
      this.RestService.addAccident(result).subscribe(
        (success) => {
          this.getAllAccidents(result.date, result.city, 1);
          this.SnackBar.openSnackBar("The accidentadded successfully!","success");
        },
        (error) => {
          console.log(error);
          this.SnackBar.openSnackBar("The accident wasn't added successfully. Try again!","error");
        }
      )
    });
  }

  private clone(accident_object) {
    let temp_object = {};
    for (let key of Object.keys(accident_object)) {
      temp_object[key] = accident_object[key];
    }
    return temp_object;
  }

  private isFormValid(obj) {
    if (Object.keys(obj).length < 16) {
      return { message: "All fields should be completed!" }
    }
    for (let prop in obj) {
      if (obj[prop] == "" && typeof obj[prop] !="boolean" && !obj[prop].toString()) {
        return { message: "Insert values for all fileds!" };
      }
    }
    if (!Number(obj.no_of_vehicles + obj.affected_drivers+obj.affected_passengers+obj.affected_pedestrians + obj.time + obj.no_of_female +obj.no_of_male)) {
      return { message: "Insert correct values!" }
    }
    if (!Number(new Date(obj.date))) {
      return { message: "Invalid date value!" }
    }


    return true;
  }

  private dateToForm(date){
    let date_list = date.trim().split("/");
    if (date_list.length!=3){
      return "";
    }
    let month = date_list[0];
    if (month.length==1){month="0"+month}
    let datee = date_list[1];
    if (datee.length==1){datee="0"+datee}
    let year = date_list[2];
    return year+"-"+month+"-"+datee;
  }

  private dateFromForm(date){
    if (!date){
      return ""
    }
    let date_list = date.split("-");
    if (date_list.length!=3){
      return "";
    }
    let month = date_list[1].replace(/^0+/, '');
    let datee = date_list[2].replace(/^0+/, '');
    let year = date_list[0].replace(/^0+/, '');
    return month+"/"+datee+"/"+year;
  }

  private timeToForm(timeIn){
    if (typeof timeIn == "string" && timeIn.trim().length == 4){
      return timeIn.substring(0,2)+":"+timeIn.substring(2,4);
    }
    return ""
  }

  private timeFromForm(timeIn){
    if (typeof timeIn == "string" && timeIn.trim().length == 5){
      let time_list = timeIn.split(":");
      return time_list[0]+time_list[1]
    }
    return ""
  }

  public displayedColumns: string[] = [
    'id',
    'city',
    'road surface',
    'vehicle amount',
    'date and time',
    'first road class',
    'lightning condition',
    'weather condition',
    'affected drivers/pedestrians/passengers',
    'severity',
    'casualty male female',
    'vehicle type',
    'Action'
  ];

}

export interface Accident {
  id: Number,
  no_of_vehicles: Number,
  date: String,
  time: String,
  _1st_road_class: String,
  road_surface: String,
  lightning_conditions: String,
  weather: String,
  severity: String,
  no_of_male: String,
  no_of_female: String,
  vehicleType: String,
  affected_drivers: Number,
  affected_pedestrians:Number,
  affected_passengers:Number,
  city: String,
  holiday: boolean
};

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AccidenteditdialogComponent } from '../dialogs/accidenteditdialog/accidenteditdialog.component';
import { RestService } from 'src/app/services/rest/rest.service';
import { AreyousureComponent } from '../dialogs/areyousure/areyousure.component';

@Component({
  selector: 'accidentdetails',
  templateUrl: './accidentdetails.component.html',
  styleUrls: ['./accidentdetails.component.css']
})
export class AccidentdetailsComponent implements OnInit {

  constructor(private dialog: MatDialog, private restService: RestService) { }

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

  getAllAccidents(date, city, page) {
    if (!Number(new Date(date))) {
      if (date == "") { date = null }
      else { window.alert("Insert correct date input!"); return null; }
    }
    if (city == "") { city = null }

    this.restService.getAllAccidents(date, city, page).subscribe(
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
        window.alert("Error!")
      }
    )
  }

  pagination(page) {
    if (page <= 0) { return null }
    else if (page > this.current_state.page_tot) { return null }
    else { this.getAllAccidents(this.current_state.date, this.current_state.city, page) }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(uid) {
    let dialogRef = this.dialog.open(AreyousureComponent, { data: "Are you sure want to delete the accident from database?" });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.restService.deleteAccident(uid).subscribe(
          (success) => {
            this.getAllAccidents(this.current_state.date, this.current_state.city, this.current_state.pageNumber);
          },
          (error) => {
            console.log(error);
            window.alert("The accident couldnt be deleted!");
          }
        )
      }
      else if (result == false) {
        return null;
      }
    });
  }

  edit(accident_object) {
    let new_object = this.clone(accident_object);
    let dialogRef = this.dialog.open(AccidenteditdialogComponent, { data: new_object });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) { return null }
      let isFormValid = this.isFormValid(result);
      if (isFormValid != true) { window.alert(isFormValid.message); return null }
      this.restService.editAccident(result).subscribe(
        (success) => {
          this.getAllAccidents(this.current_state.date, this.current_state.city, this.current_state.pageNumber);
        },
        (error) => {
          console.log(error);
        }
      )
    });

  }

  addAccident() {
    let dialogRef = this.dialog.open(AccidenteditdialogComponent, { data: {} });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) { return null }
      let isFormValid = this.isFormValid(result);
      if (isFormValid != true) { window.alert(isFormValid.message); return null }
      this.restService.addAccident(result).subscribe(
        (success) => {
          this.getAllAccidents(result.date, result.city, 1);
        },
        (error) => {
          console.log(error);
        }
      )
    });
  }

  clone(accident_object) {
    let temp_object = {};
    for (let key of Object.keys(accident_object)) {
      temp_object[key] = accident_object[key];
    }
    return temp_object;
  }

  isFormValid(obj) {
    if (Object.keys(obj).length != 18) {
      return { message: "All fields should be completed!" }
    }
    for (let prop in obj) {
      if (obj[prop] == "") {
        return { message: "Insert values for all fileds!" };
      }
    }
    if (!Number(obj.no_of_vehicles + obj.casualty + obj.grid_ref_easting + obj.grid_ref_northing + obj.time + obj.age_of_casualty)) {
      return { message: "Insert correct values!" }
    }
    if (!Number(new Date(obj.date))) {
      return { message: "Invalid date value!" }
    }
    if (typeof obj.holiday != "boolean"){
      return { message: "Holiday value should be 'true' or 'false'" }
    }

    return true;
  }

  displayedColumns: string[] = [
    'id',
    'reference number',
    'grid ref easting and northing',
    'road surface',
    'vehicle amount',
    'date and time',
    'first road class',
    'lightning condition',
    'weather condition',
    'casualty',
    'casualty class',
    'casualty severity',
    'casualty sex and age',
    'vehicle type',
    'Action'
  ];

}

export interface Accident {
  id: Number,
  reference_number: String,
  grid_ref_easting: String,
  grid_ref_northing: String,
  no_of_vehicles: Number,
  date: String,
  time: String,
  _1st_road_class: String,
  road_surface: String,
  lightning_conditions: String,
  weather: String,
  _class: String,
  casualty_severity: String,
  sex_of_casualty: String,
  age_of_casualty: String,
  vehicleType: String,
  casualty: String,
  city: String,
  holiday: boolean
};

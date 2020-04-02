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
    city:null,
    pageNumber:null,
    date:null,
    page_tot:null,
    page_array:null
  }

  getAllAccidents(date,city,page) {
    if (date==""){date=null}
    else if(city==""){city=null}

    this.restService.getAllAccidents(date,city,page).subscribe(
      (success) => {
        this.accidents = success["content"];
        this.data_recieved = true;
        this.current_state = {city:city,pageNumber:page,date:date,page_tot:success["totalPages"],page_array:Array.from(Array(success["totalPages"]).keys()).map(x => ++x)}
        console.log(this.current_state)
        this.dataSource = new MatTableDataSource(this.accidents)
      },
      (error) => {
        console.log(error);
      }
    )
  }

  pagination(page){
    if (page<=0){return null}
    else if (page>this.current_state.page_tot){return null}
    else {this.getAllAccidents(this.current_state.date,this.current_state.city,page)}
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
            this.getAllAccidents(this.current_state.date,this.current_state.city,this.current_state.pageNumber);
          },
          (error) => {
            console.log(error);
          }
        )
      }
      else if (result == false) {

      }
    });
  }

  edit(accident_object) {
    let new_object = this.clone(accident_object);
    let dialogRef = this.dialog.open(AccidenteditdialogComponent, { data: new_object });
    dialogRef.afterClosed().subscribe(result => {
      this.restService.editAccident(result).subscribe(
        (success) => {
          this.getAllAccidents(this.current_state.date,this.current_state.city,this.current_state.pageNumber);
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
      this.restService.addAccident(result).subscribe(
        (success) => {
          this.getAllAccidents(result.date,result.city,1);
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
    console.log(temp_object);
    return temp_object;
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
  city:String,
  holiday:boolean
};
   // = [{id: 44,
  //   reference_number: "0BD0401",
  //   grid_ref_easting: "424090",
  //   grid_ref_northing: "428088",
  //   no_of_vehicles: 3,
  //   date: "2013-11-13 00:00:00",
  //   time: "1018",
  //   _1st_road_class: "Motorway",
  //   road_surface: "Dry",
  //   lightning_conditions: "Daylight: street lights present",
  //   weather: "Weather Conditions",
  //   casualty: "1",
  //   _class: "Driver",
  //   sex_of_casualty: "Female",
  //   age_of_casualty: "41",
  //   vehicle_type: "Car",
  //   causalty_severity: "Slight"
  //   }];

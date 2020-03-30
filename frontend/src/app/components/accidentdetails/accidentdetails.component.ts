import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AccidenteditdialogComponent } from '../dialogs/accidenteditdialog/accidenteditdialog.component';
import { DeletedialogComponent } from '../dialogs/deletedialog/deletedialog.component';
import { RestService } from 'src/app/services/rest/rest.service';

const accidents = [
  {
    reference_number: 231111111111,
    grid_ref_easting: 12434,
    grid_ref_northing: 222,
    road_surface: "wet",
    vehicle_amount: 2,
    date: "2019/1/2",
    time: 1243,
    first_road_class: "we",
    lightning_condition: "goog",
    weather_condition: "wet",
    casualty_class: "pedestrian",
    casualty_severity: "hand",
    casualty_sex: "sex",
    casualty_age: "23",
    vehicle_type: "van"
  }
];
@Component({
  selector: 'accidentdetails',
  templateUrl: './accidentdetails.component.html',
  styleUrls: ['./accidentdetails.component.css']
})
export class AccidentdetailsComponent implements OnInit {

  constructor(private dialog: MatDialog, private rest: RestService) { }

  ngOnInit(): void {
  }


  displayedColumns: string[] = [
    'reference number',
    'grid ref easting and northing',
    'road surface',
    'vehicle amount',
    'date and time',
    'first road class',
    'lightning condition',
    'weather condition',
    'casualty class',
    'casualty severity',
    'casualty sex and age',
    'vehicle type',
    'Action'
  ];

  dataSource = new MatTableDataSource(accidents);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(reference_no) {
    let dialogRef = this.dialog.open(DeletedialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  edit(accident_object) {
    let new_object = this.clone(accident_object);
    let dialogRef = this.dialog.open(AccidenteditdialogComponent, { data: new_object });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  addAccident() {
    let dialogRef = this.dialog.open(AccidenteditdialogComponent, { data: {} });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
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

  testApi() {
    this.rest.testApi().subscribe((data) =>
      console.log(data));
  }
  
}

import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'app-accidenteditdialog',
  templateUrl: './accidenteditdialog.component.html',
  styleUrls: ['./accidenteditdialog.component.css']
})
export class AccidenteditdialogComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public data, public rest : RestService){}


  ngOnInit(): void {
  }
  public holiday_bool = [false,true,"not known"];
  public lightning_conditions = ['Darkness: street lighting unknown',
       'Daylight: street lights present',
       'Darkness: street lights present and lit',
       'Darkness: no street lighting'];
  public road_surface = ['Dry',  'Wet / Damp','Frost / Ice'];
  public classes = ["Driver", "Passenger", "Pedestrian"];
  public casualty_severity = ["Fatal", "Serious", "Slight"];
  public sex_of_casualty = ["Male","Female"];
  public vehicle_type = ["Car",
        "Motorcycle over 125cc and up to 500cc" ,
        "Bus or coach (17 or more passenger seats)",
        "Pedal cycle",
        "Goods vehicle 3.5 tonnes mgw and under",
        "Motorcycle over 500cc",
        "Taxi/Private hire car",
        "Goods vehicle over 3.5 tonnes and under 7.5 tonnes mgw",
        "M/cycle 50cc and under",
        "Motorcycle over 50cc and up to 125cc",
        "Minibus (8 ? 16 passenger seats)",
        "Goods vehicle 7.5 tonnes mgw and over",
        "Other Vehicle",
        "Agricultural vehicle (includes diggers etc.)",
        "Mobility Scooter"];
}

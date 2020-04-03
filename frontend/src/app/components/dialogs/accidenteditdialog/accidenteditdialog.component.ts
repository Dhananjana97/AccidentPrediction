import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestService } from 'src/app/services/rest/rest.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-accidenteditdialog',
  templateUrl: './accidenteditdialog.component.html',
  styleUrls: ['./accidenteditdialog.component.css']
})
export class AccidenteditdialogComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public data, public rest : RestService,public datepipe: DatePipe){}


  ngOnInit(): void {

  }
  public weathers = ['Fine without high winds', 'Raining without high winds',
  'Raining with high winds', 'Fine with high winds',
  'Snowing without high winds', 'Other', 'Unknown',
  'Fog or mist \x96 if hazard'];
  public holiday_bool = [false,true];
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
  public   cities = ["Akkaraipattu", "Ambalangoda", "Ampara", "Anuradhapura", "Badulla", "Balangoda", "Bandarawela", "Batticaloa", "Beruwala", "Boralesgamuwa", "Chavakachcheri", "Chilaw", "Colombo", "Dambulla", "Dehiwala-Mount Lavinia", "Embilipitiya", "Eravur", "Galle", "Gampaha", "Gampola", "Hambantota", "Haputale", "Hatton-Dickoya", "Hikkaduwa", "Horana", "Ja-Ela", "Jaffna", "Kadugannawa", "Kaduwela", "Kalmunai", "Kalutara", "Kandy", "Kattankudy", "Katunayake", "Kegalle", "Kesbewa", "Kilinochchi", "Kinniya", "Kolonnawa", "Kuliyapitiya", "Kurunegala", "Maharagama", "Mannar", "Matale", "Matara", "Minuwangoda", "Moneragala", "Moratuwa", "Mullaitivu", "Nawalapitiya", "Negombo", "Nuwara Eliya", "Panadura", "Peliyagoda", "Point Pedro", "Polonnaruwa", "Puttalam", "Ratnapura", "Seethawakapura", "Sri Jayawardenepura", "Tangalle", "Thalawakele-Lindula", "Trincomalee", "Valvettithurai", "Vavuniya", "Wattala-Mabole", "Wattegama", "Weligama"];

  dateToForm(dateIn){
    let date=new Date(dateIn);
    let latest_date =this.datepipe.transform(date, 'yyyy-MM-dd');
    return latest_date
  }

}

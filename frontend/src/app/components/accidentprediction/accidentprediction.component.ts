import { Component, OnInit, Inject } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {PredictionwarningComponent} from "../dialogs/predictionwarning/predictionwarning.component";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RestService } from "../../services/rest/rest.service";
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-accidentprediction',
  templateUrl: './accidentprediction.component.html',
  styleUrls: ['./accidentprediction.component.css']
})
export class AccidentpredictionComponent implements OnInit {

  holiday: boolean;
  lighting_condition: String;
  road_surface = "Dry";
  city: String;
  weather_condition: String;


  weather = ['Fine without high winds', 'Raining without high winds',
    'Raining with high winds', 'Fine with high winds',
    'Snowing without high winds', 'Other', 'Unknown',
    'Fog or mist \x96 if hazard'];

  light = ['Darkness: street lighting unknown',
    'Daylight: street lights present',
    'Darkness: street lights present and lit',
    'Darkness: no street lighting'];

  road = ['Dry', 'Wet / Damp'];

  cities = ["Akkaraipattu", "Ambalangoda", "Ampara", "Anuradhapura", "Badulla", "Balangoda", "Bandarawela", "Batticaloa", "Beruwala", "Boralesgamuwa", "Chavakachcheri", "Chilaw", "Colombo", "Dambulla", "Dehiwala-Mount Lavinia", "Embilipitiya", "Eravur", "Galle", "Gampaha", "Gampola", "Hambantota", "Haputale", "Hatton-Dickoya", "Hikkaduwa", "Horana", "Ja-Ela", "Jaffna", "Kadugannawa", "Kaduwela", "Kalmunai", "Kalutara", "Kandy", "Kattankudy", "Katunayake", "Kegalle", "Kesbewa", "Kilinochchi", "Kinniya", "Kolonnawa", "Kuliyapitiya", "Kurunegala", "Maharagama", "Mannar", "Matale", "Matara", "Minuwangoda", "Moneragala", "Moratuwa", "Mullaitivu", "Nawalapitiya", "Negombo", "Nuwara Eliya", "Panadura", "Peliyagoda", "Point Pedro", "Polonnaruwa", "Puttalam", "Ratnapura", "Seethawakapura", "Sri Jayawardenepura", "Tangalle", "Thalawakele-Lindula", "Trincomalee", "Valvettithurai", "Vavuniya", "Wattala-Mabole", "Wattegama", "Weligama"];

  prediction_form = new FormGroup({
    city: new FormControl('', Validators.required),
    road: new FormControl('', Validators.required),
    light: new FormControl('', Validators.required),
    weather: new FormControl('', Validators.required),
    holiday: new FormControl('', Validators.required)
  });

  predicted_data = 0;

  constructor(private restService: RestService, public dialog: MatDialog) {


  }

  ngOnInit(): void {

  }

  checkValidation() {

    for (let key in this.prediction_form.value) {
      var value = this.prediction_form.value[key];
      if (value == "") {
        return false;
      }
      // Use `key` and `value`
    }
    return true;
  }

  openDialog(header, content): void {
    const dialogRef = this.dialog.open(PredictionwarningComponent, {
      width: '250px',
      data: {header: header, content: content}
    });

    setTimeout(()=>{
      dialogRef.close();
    }, 1500)
    
    
  }

  getPredictions() {

    if(this.checkValidation()){
      var payload = {

        "City": this.prediction_form.value.city,
        "Road Surface": this.prediction_form.value.road,
        "Lighting Conditions": this.prediction_form.value.light,
        "Holiday": this.prediction_form.value.holiday,
        "Weather Conditions": this.prediction_form.value.weather
      }
  
  
      this.restService.getAccidentPrediction(payload).subscribe(data => {
        if (data['data']) {
          this.predicted_data = parseInt(data['data']);
        }
  
      }, err => {
        console.log(err);
      })
    }else{
      this.openDialog("Warning!", "Fill all the inputs.")
    }

    
  }

}

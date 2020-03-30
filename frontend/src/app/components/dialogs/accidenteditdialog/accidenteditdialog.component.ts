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

}

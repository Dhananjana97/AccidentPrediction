import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-accidenteditdialog',
  templateUrl: './accidenteditdialog.component.html',
  styleUrls: ['./accidenteditdialog.component.css']
})
export class AccidenteditdialogComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public data){}


  ngOnInit(): void {
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-predictionwarning',
  templateUrl: './predictionwarning.component.html',
  styleUrls: ['./predictionwarning.component.css']
})
export class PredictionwarningComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PredictionwarningComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DialogData {
  header: string;
  content: string;
}

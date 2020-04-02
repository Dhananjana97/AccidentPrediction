import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _snackBar: MatSnackBar
  ) {}

  public openSnackBar(message:string,type: string){
    let snack_class = "snack-success";
    if (type=="error"){
      snack_class = "snack-error"
    }
    this._snackBar.open(message, "Okay" , {
      duration: 2000,
      panelClass:[snack_class]
    });
  }
}

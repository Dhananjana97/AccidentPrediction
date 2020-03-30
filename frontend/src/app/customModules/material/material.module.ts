import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }

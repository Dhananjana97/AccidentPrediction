import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminGuard, StaffGuard, OfficerGuard } from './guards/guard';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { appRoutes } from "./app.routes";
import { NavigationComponent } from './components/navigation/navigation.component';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { RolerequestsComponent } from './components/rolerequests/rolerequests.component';
import { ManagerolesComponent } from './components/manageroles/manageroles.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { AccidentdetailsComponent } from './components/accidentdetails/accidentdetails.component';
import { AccidenteditdialogComponent } from './components/dialogs/accidenteditdialog/accidenteditdialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { DeletedialogComponent } from './components/dialogs/deletedialog/deletedialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    NavigationComponent,
    TopnavbarComponent,
    RolerequestsComponent,
    ManagerolesComponent,
    UserprofileComponent,
    AccidentdetailsComponent,
    AccidenteditdialogComponent,
    DeletedialogComponent
  ],
  imports: [
    MatDialogModule,
    MatIconModule,
    FormsModule, 
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AdminGuard,
    StaffGuard,
    OfficerGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

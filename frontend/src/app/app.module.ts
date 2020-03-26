import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminGuard, StaffGuard, OfficerGuard, AuthGuard, UnAuthGuard } from './guards/guard';
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
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { DeletedialogComponent } from './components/dialogs/deletedialog/deletedialog.component';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { environment } from 'src/environments/environment';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
// import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

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
    DeletedialogComponent,
    SignupComponent
  ],
  imports: [
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    // MatPasswordStrengthModule.forRoot(),
    NgxAuthFirebaseUIModule.forRoot({

      apiKey: "AIzaSyBomxBs0hejtfJsHyad2k8WGib9LOKNDpg",
      authDomain: "accident-analyzer-43f5d.firebaseapp.com",
      databaseURL: "https://accident-analyzer-43f5d.firebaseio.com",
      projectId: "accident-analyzer-43f5d",
      storageBucket: "accident-analyzer-43f5d.appspot.com",
      messagingSenderId: "562447144307",

    },()=>"Accident Analyzer",
    {
      authGuardLoggedInURL:"home"
    }),

    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AdminGuard,
    StaffGuard,
    OfficerGuard,
    AuthGuard,
    UnAuthGuard
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: InterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

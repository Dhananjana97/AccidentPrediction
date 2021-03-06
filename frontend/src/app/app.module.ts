import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminGuard, StaffGuard, GuestGuard, AuthGuard, UnAuthGuard } from './guards/guard';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { appRoutes } from "./app.routes";
import { NavigationComponent } from './components/navigation/navigation.component';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { RolerequestsComponent } from './components/rolerequests/rolerequests.component';
import { ManagerolesComponent } from './components/manageroles/manageroles.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { AccidentdetailsComponent } from './components/accidentdetails/accidentdetails.component';
import { AccidenteditdialogComponent } from './components/dialogs/accidenteditdialog/accidenteditdialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DeletedialogComponent } from './components/dialogs/deletedialog/deletedialog.component';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SendrequestsComponent } from './components/sendrequests/sendrequests.component';
import { RoleRequestDialogComponent } from './components/dialogs/role-request-dialog/role-request-dialog.component';
import { MaterialModule } from './customModules/material/material.module';
import { EditprofileComponent } from './components/dialogs/editprofile/editprofile.component';
import { AreyousureComponent } from './components/dialogs/areyousure/areyousure.component';
import { ApproveComponent } from './components/approve/approve.component';

import { AccidentpredictionComponent } from './components/accidentprediction/accidentprediction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PredictionwarningComponent } from './components/dialogs/predictionwarning/predictionwarning.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    TopnavbarComponent,
    RolerequestsComponent,
    ManagerolesComponent,
    UserprofileComponent,
    AccidentdetailsComponent,
    AccidenteditdialogComponent,
    DeletedialogComponent,
    SignupComponent,
    SendrequestsComponent,
    RoleRequestDialogComponent,
    EditprofileComponent,
    AreyousureComponent,
    ApproveComponent,
    AccidentpredictionComponent,
    PredictionwarningComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AngularFireAuthModule,
    AppRoutingModule,
    MaterialModule,
    MatChipsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AdminGuard,
    StaffGuard,
    DatePipe,
    GuestGuard,
    AuthGuard,
    UnAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

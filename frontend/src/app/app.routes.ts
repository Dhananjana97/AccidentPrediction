import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RolerequestsComponent } from "./components/rolerequests/rolerequests.component";
import { priviledges } from './Roles/roles';
import { ManagerolesComponent } from './components/manageroles/manageroles.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard, StaffGuard, AuthGuard, UnAuthGuard } from './guards/guard';
import { AccidentdetailsComponent } from './components/accidentdetails/accidentdetails.component';
import { HomeComponent } from './components/home/home.component';




export const appRoutes = [
    {
        path:"",
        redirectTo:"/login",
        pathMatch: 'full'
    },
    {
        path:"login",
        component:LoginComponent,
        canActivate:[UnAuthGuard]
    },
    {
        path:"home",
        component:HomeComponent,
        canActivate:[AuthGuard],
        children:[
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'profile',
                component: UserprofileComponent,
            },
            {
                path: 'login',
                component: LoginComponent,
        
            },
            {
                path: priviledges.Admin[0].url_name,
                component: RolerequestsComponent,
                canActivate: [AdminGuard]
            },
            {
                path: priviledges.Admin[1].url_name,
                component: ManagerolesComponent,
                canActivate: [AdminGuard]
            },
            {
                path: priviledges.Staff[0].url_name,
                component: AccidentdetailsComponent,
                canActivate: [StaffGuard]
            }
        ]
    }    
];

import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { priviledges } from './systemData/priviledges';
import { ManagerolesComponent } from './components/manageroles/manageroles.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { AdminGuard, StaffGuard, AuthGuard, UnAuthGuard, GuestGuard } from './guards/guard';
import { AccidentdetailsComponent } from './components/accidentdetails/accidentdetails.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';




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
        path:"register",
        component:SignupComponent,
        canActivate:[UnAuthGuard]
    },
    {
        path:"home",
        component:HomeComponent,
        canActivate:[AuthGuard],
        children:[
            {
                path: priviledges.Guest[0].url_name,
                component: DashboardComponent,
                canActivate: [GuestGuard]
            },
            {
                path: priviledges.Guest[1].url_name,
                component: UserprofileComponent,
                canActivate: [GuestGuard]
            },
            {
                path: priviledges.Admin[0].url_name,
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

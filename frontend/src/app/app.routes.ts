import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent} from "./components/dashboard/dashboard.component";
import { RolerequestsComponent } from "./components/rolerequests/rolerequests.component";
import { priviledges } from './Roles/roles';

export const appRoutes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: priviledges.Admin[0].url_name,
        component: RolerequestsComponent
    }
];

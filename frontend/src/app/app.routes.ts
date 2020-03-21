import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent} from "./components/dashboard/dashboard.component";

export const appRoutes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'others',
        loadChildren: './components/others/others.module#OthersModule'
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

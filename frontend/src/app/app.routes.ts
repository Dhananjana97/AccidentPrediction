import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
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


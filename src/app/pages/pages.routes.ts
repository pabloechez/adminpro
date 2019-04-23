import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {PromesasComponent} from './promesas/promesas.component';
import {LoginGuardGuard} from '../services/service.index';

const pagesroutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [ LoginGuardGuard ],
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'progress', component: ProgressComponent},
      { path: 'graficas1', component: Graficas1Component},
      { path: 'promesas', component: PromesasComponent},
      { path: 'account-settings', component: AccountSettingsComponent},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesroutes );


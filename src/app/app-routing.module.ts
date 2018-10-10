import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/core/pages/dashboard/dashboard.component';
import { UserDashboardPageComponent } from './modules/core/pages/user-dashboard-page/user-dashboard-page.component';
import { SettingsPageComponent } from './modules/core/pages/settings-page/settings-page.component';
import { ErrorPageComponent } from './modules/core/pages/error-page/error-page.component';
import { PageNotFoundPageComponent } from './modules/core/pages/page-not-found-page/page-not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: UserDashboardPageComponent
  },
  {
    path: 'settings',
    component: SettingsPageComponent
  },
  {
    path: 'planning',
    loadChildren: './modules/planning/planning.module#PlanningModule'
  },
  {
    path: 'billing',
    loadChildren: './modules/billing/billing.module#BillingModule'
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: '404',
    component: PageNotFoundPageComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

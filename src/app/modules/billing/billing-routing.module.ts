import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingDashboardPageComponent } from './pages/billing-dashboard-page/billing-dashboard-page.component';
import { FMSOccupancyPageComponent } from './pages/fmsoccupancy-page/fmsoccupancy-page.component';
import { CREManagementRatesPageComponent } from './pages/cremanagement-rates-page/cremanagement-rates-page.component';
import { RechargesCTTBPageComponent } from './pages/recharges-cttbpage/recharges-cttbpage.component';
import { ChangeCRERatesPageComponent } from './pages/change-crerates-page/change-crerates-page.component';
import { CRERatesSummaryPageComponent } from './pages/crerates-summary-page/crerates-summary-page.component';
import { ChangeManagementRatesPageComponent } from './pages/change-management-rates-page/change-management-rates-page.component';
import { ChangeCREBuildingRatePageComponent } from './pages/change-crebuilding-rate-page/change-crebuilding-rate-page.component';
import { RateApprovalPageComponent } from './pages/rate-approval-page/rate-approval-page.component';
import { NewBuildingPageComponent } from './pages/new-building-page/new-building-page.component';

const routes: Routes = [
  {
    path: '',
    component: BillingDashboardPageComponent
  },
  {
    path: 'fms-occupancy',
    component: FMSOccupancyPageComponent
  },
  {
    path: 'cre-management-rates-summary',
    component: CREManagementRatesPageComponent
  },
  {
    path: 'recharges-cttb',
    component: RechargesCTTBPageComponent
  },
  {
    path: 'cre-buildings-rates-summary',
    component: CRERatesSummaryPageComponent
  },
  {
    path: 'change-management-rates',
    component: ChangeManagementRatesPageComponent
  },
  {
    path: 'change-cre-rates/:horizonId',
    component: ChangeCRERatesPageComponent
  },
  {
    path: 'change-cre-building-rate/:horizonId',
    component: ChangeCREBuildingRatePageComponent
  },
  {
    path: 'rate-approvals',
    component: RateApprovalPageComponent
  },
  {
    path: 'new-building',
    component: NewBuildingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }

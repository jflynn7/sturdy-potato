import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { BillingDashboardPageComponent } from './pages/billing-dashboard-page/billing-dashboard-page.component';
import { FMSOccupancyPageComponent } from './pages/fmsoccupancy-page/fmsoccupancy-page.component';
import { CREManagementRatesPageComponent } from './pages/cremanagement-rates-page/cremanagement-rates-page.component';
import { RechargesCTTBPageComponent } from './pages/recharges-cttbpage/recharges-cttbpage.component';
import { CRERatesSummaryPageComponent } from './pages/crerates-summary-page/crerates-summary-page.component';
import { ChangeManagementRatesPageComponent } from './pages/change-management-rates-page/change-management-rates-page.component';
import { ChangeCRERatesPageComponent } from './pages/change-crerates-page/change-crerates-page.component';
import { ChangeCREBuildingRatePageComponent } from './pages/change-crebuilding-rate-page/change-crebuilding-rate-page.component';
import { RateApprovalPageComponent } from './pages/rate-approval-page/rate-approval-page.component';
import { NewBuildingPageComponent } from './pages/new-building-page/new-building-page.component';

@NgModule({
  imports: [
    CommonModule,
    BillingRoutingModule
  ],
  declarations: [
    BillingDashboardPageComponent,
    FMSOccupancyPageComponent,
    CREManagementRatesPageComponent,
    RechargesCTTBPageComponent,
    CRERatesSummaryPageComponent,
    ChangeManagementRatesPageComponent,
    ChangeCRERatesPageComponent,
    ChangeCREBuildingRatePageComponent,
    RateApprovalPageComponent,
    NewBuildingPageComponent
  ]
})
export class BillingModule { }

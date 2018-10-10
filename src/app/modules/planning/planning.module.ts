import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningDashboardPageComponent } from './pages/planning-dashboard-page/planning-dashboard-page.component';
import { DirectCostsSummaryPageComponent } from './pages/direct-costs-summary-page/direct-costs-summary-page.component';
import { OpexSummaryPageComponent } from './pages/opex-summary-page/opex-summary-page.component';
import { RechargesSummaryPageComponent } from './pages/recharges-summary-page/recharges-summary-page.component';
import { VariableOccupancyPageComponent } from './pages/variable-occupancy-page/variable-occupancy-page.component';
import { UploadFilesPageComponent } from './pages/upload-files-page/upload-files-page.component';
import { TriggerRunPageComponent } from './pages/trigger-run-page/trigger-run-page.component';
import { SaveSubmitAOPPageComponent } from './pages/save-submit-aoppage/save-submit-aoppage.component';
import { ApprovalsPageComponent } from './pages/approvals-page/approvals-page.component';
import { RateSettingPageComponent } from './pages/rate-setting-page/rate-setting-page.component';
import { ManualAllocationPageComponent } from './pages/manual-allocation-page/manual-allocation-page.component';
import { CapitalSpendSummaryPageComponent } from './pages/capital-spend-summary-page/capital-spend-summary-page.component';
import { RatesGroupPageComponent } from './pages/rates-group-page/rates-group-page.component';
import { SavedRunsPageComponent } from './pages/saved-runs-page/saved-runs-page.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    PlanningRoutingModule
  ],
  declarations: [
    PlanningDashboardPageComponent,
    DirectCostsSummaryPageComponent,
    OpexSummaryPageComponent,
    RechargesSummaryPageComponent,
    VariableOccupancyPageComponent,
    UploadFilesPageComponent,
    TriggerRunPageComponent,
    SaveSubmitAOPPageComponent,
    ApprovalsPageComponent,
    RateSettingPageComponent,
    ManualAllocationPageComponent,
    CapitalSpendSummaryPageComponent,
    RatesGroupPageComponent,
    SavedRunsPageComponent
  ],
  exports: [
    PlanningDashboardPageComponent
  ]
})
export class PlanningModule { }

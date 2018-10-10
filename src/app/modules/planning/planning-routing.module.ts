import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanningDashboardPageComponent } from './pages/planning-dashboard-page/planning-dashboard-page.component';
import { OpexSummaryPageComponent } from './pages/opex-summary-page/opex-summary-page.component';
import { DirectCostsSummaryPageComponent } from './pages/direct-costs-summary-page/direct-costs-summary-page.component';
import { ManualAllocationPageComponent } from './pages/manual-allocation-page/manual-allocation-page.component';
import { RechargesSummaryPageComponent } from './pages/recharges-summary-page/recharges-summary-page.component';
import { SaveSubmitAOPPageComponent } from './pages/save-submit-aoppage/save-submit-aoppage.component';
import { RateSettingPageComponent } from './pages/rate-setting-page/rate-setting-page.component';
import { UploadFilesPageComponent } from './pages/upload-files-page/upload-files-page.component';
import { TriggerRunPageComponent } from './pages/trigger-run-page/trigger-run-page.component';
import { ApprovalsPageComponent } from './pages/approvals-page/approvals-page.component';
import { RatesGroupPageComponent } from './pages/rates-group-page/rates-group-page.component';
import { SavedRunsPageComponent } from './pages/saved-runs-page/saved-runs-page.component';
import { VariableOccupancyPageComponent } from './pages/variable-occupancy-page/variable-occupancy-page.component';
import { CapitalSpendSummaryPageComponent } from './pages/capital-spend-summary-page/capital-spend-summary-page.component';

const routes: Routes = [
  {
    path: '',
    component: PlanningDashboardPageComponent
  },
  {
    path: 'opex-summary',
    component: OpexSummaryPageComponent
  },
  {
    path: 'direct-costs',
    component: DirectCostsSummaryPageComponent
  },
  {
    path: 'manual-allocation',
    component: ManualAllocationPageComponent
  },
  {
    path: 'recharges-summary',
    component: RechargesSummaryPageComponent
  },
  {
    path: 'save-or-submit',
    component: SaveSubmitAOPPageComponent
  },
  {
    path: 'rate-setting',
    component: RateSettingPageComponent
  },
  {
    path: 'file-upload',
    component: UploadFilesPageComponent
  },
  {
    path: 'trigger-run',
    component: TriggerRunPageComponent
  },
  {
    path: 'approvals',
    component: ApprovalsPageComponent
  },
  {
    path: 'rates-group',
    component: RatesGroupPageComponent
  },
  {
    path: 'saved-runs',
    component: SavedRunsPageComponent
  },
  {
    path: 'variable-occupancy',
    component: VariableOccupancyPageComponent
  },
  {
    path: 'capital-spend-summary',
    component: CapitalSpendSummaryPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningRoutingModule { }

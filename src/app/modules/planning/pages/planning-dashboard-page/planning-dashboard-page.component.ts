import { Component, Injector, OnInit } from '@angular/core';
import { selectDataByKey } from '../../../core/state/core-data/core-data.selectors';
import { Tables } from '../../../core/content/tables';
import { select } from '@ngrx/store';
import { PageBaseComponent } from '../../../core/pages/page-base/page-base.component';
import { DataTableConfig } from '../../../core/components/tables/data-table/data-table.component';
import { LoadVersions } from '../../../core/state/core-data/action-subsets/load-planning-tables.actions';

@Component({
  selector: 'app-planning-dashboard-page',
  templateUrl: './planning-dashboard-page.component.html',
  styleUrls: ['./planning-dashboard-page.component.scss']
})
export class PlanningDashboardPageComponent extends PageBaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  versionTable: DataTableConfig = Tables.Versions;

  ngOnInit() {
    this.versionTable.data$ = this.store.pipe(
      select(selectDataByKey(this.versionTable.selectorKey))
    );

    // Dispatch actions to cause loading data effects
    this.store.dispatch(new LoadVersions());

  }

}

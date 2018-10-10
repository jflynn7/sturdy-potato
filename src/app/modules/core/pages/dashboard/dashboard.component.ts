import { Component, Injector, OnInit } from '@angular/core';
import { select } from '@ngrx/store';
import { SidePanel } from '../../components/side-panel/state/side-panel.reducers';
import { DataTableConfig } from '../../components/tables/data-table/data-table.component';
import { selectDataByKey } from '../../state/core-data/core-data.selectors';
import { Tables } from '../../content/tables';
import { PageBaseComponent } from '../page-base/page-base.component';
import { LoadDirectCosts, LoadVersions } from '../../state/core-data/action-subsets/load-planning-tables.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends PageBaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  directCostsTable: DataTableConfig = Tables.DirectCosts;
  versionTable: DataTableConfig = Tables.Versions;

  ngOnInit() {

    // Update tables with data$
    this.directCostsTable.data$ = this.store.pipe(
      select(selectDataByKey(this.directCostsTable.selectorKey))
    );

    this.versionTable.data$ = this.store.pipe(
      select(selectDataByKey(this.versionTable.selectorKey))
    );

    // Dispatch actions to cause loading data effects
    this.store.dispatch(new LoadDirectCosts());
    this.store.dispatch(new LoadVersions());

  }

  openMenu(panel: SidePanel) {
    this.panelService.setSelectPanel(panel, true);
  }

}


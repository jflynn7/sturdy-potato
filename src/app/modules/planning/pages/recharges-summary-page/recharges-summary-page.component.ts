import { Component, OnInit } from '@angular/core';
import { DataTableConfig } from '../../../core/components/tables/data-table/data-table.component';
import { selectDataByKey } from '../../../core/state/core-data/core-data.selectors';
import { Tables } from '../../../core/content/tables';
import { select, Store } from '@ngrx/store';
import { LoadRechargesSummary } from '../../../core/state/core-data/action-subsets/load-planning-tables.actions';

@Component({
  selector: 'app-recharges-summary-page',
  templateUrl: './recharges-summary-page.component.html',
  styleUrls: ['./recharges-summary-page.component.scss']
})
export class RechargesSummaryPageComponent implements OnInit {

  rechargesSummaryTable: DataTableConfig = Tables.RechargesSummary;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.rechargesSummaryTable.data$ = this.store.pipe(
      select(selectDataByKey(this.rechargesSummaryTable.selectorKey))
    );

    this.store.dispatch(new LoadRechargesSummary());
  }

}

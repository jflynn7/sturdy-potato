import { Component, OnInit } from '@angular/core';
import { DataTableConfig } from '../../../core/components/tables/data-table/data-table.component';
import { Tables } from '../../../core/content/tables';
import { select, Store } from '@ngrx/store';
import { selectDataByKey } from '../../../core/state/core-data/core-data.selectors';
import { LoadOpexSummary } from '../../../core/state/core-data/action-subsets/load-planning-tables.actions';

@Component({
  selector: 'app-opex-summary-page',
  templateUrl: './opex-summary-page.component.html',
  styleUrls: ['./opex-summary-page.component.scss']
})
export class OpexSummaryPageComponent implements OnInit {

  opexSummaryTable: DataTableConfig = Tables.OpexSummary;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.opexSummaryTable.data$ = this.store.pipe(
      select(selectDataByKey(this.opexSummaryTable.selectorKey))
    );

    this.store.dispatch(new LoadOpexSummary());
  }

}

import { Component, OnInit } from '@angular/core';
import { DataTableConfig } from '../../../core/components/tables/data-table/data-table.component';
import { Tables } from '../../../core/content/tables';
import { selectDataByKey } from '../../../core/state/core-data/core-data.selectors';
import { select, Store } from '@ngrx/store';
import { LoadDirectCosts } from '../../../core/state/core-data/action-subsets/load-planning-tables.actions';

@Component({
  selector: 'app-direct-costs-summary-page',
  templateUrl: './direct-costs-summary-page.component.html',
  styleUrls: ['./direct-costs-summary-page.component.scss']
})
export class DirectCostsSummaryPageComponent implements OnInit {

  constructor(private store: Store<any>) { }

  directCostsTable: DataTableConfig = Tables.DirectCosts;

  ngOnInit() {

    // Update tables with data$
    this.directCostsTable.data$ = this.store.pipe(
      select(selectDataByKey(this.directCostsTable.selectorKey))
    );

    this.store.dispatch(new LoadDirectCosts());

  }

}

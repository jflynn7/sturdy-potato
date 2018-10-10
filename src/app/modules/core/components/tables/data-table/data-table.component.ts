import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ButtonConfig } from '../../presentation/buttons/iconic-button/iconic-button.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {

  @Input() config: DataTableConfig;
  @Input() data: any[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.config.rowLiftOverrides && this.data) {
      this.data = this.applyOverrides(this.config.rowLiftOverrides, this.data);
    }
  }

  getFormattedOutput(dataItem: any, dataType: string, prefix?: string) {
    switch (dataType) {
      case 'string': return dataItem;
      case 'currency': return prefix + parseFloat(dataItem).toFixed(2);
      default: return dataItem;
    }
  }

  applyOverrides(overrides: RowLiftOverride[], data: any[]) {
    let index;
    overrides.forEach((override: RowLiftOverride) => {

      // Find the row to be uplifted
      const row = data.filter(dataItem => {
        return dataItem[override.columnKey] === override.label;
      })[0];

      // Find the rows index to remove
      if (row) {
        index = data.findIndex(dataItemIndex => {
          return row[0] === dataItemIndex;
        });

        // Remove it from the array
        data.splice(index, 1);

        // Add it back in at the top
        data.unshift(row);
      }
    });

    return data;
  }

}

export interface DataTableConfig {
  headers?: DataTableHeader[];
  actions?: ButtonConfig[];
  rowLiftOverrides?: RowLiftOverride[];
  groupedByLevel?: boolean;
  levelSeparatorKey?: string;
  tabSeparatorKey?: string;
  data$?: Observable<any>;
  selectorKey?: string;
}

export interface DataTableHeader {
  label?: string;
  dataKey?: string;
  dataType?: string;
  prefix?: string;
}

export interface RowLiftOverride {
  label?: string;
  columnKey?: string;
}

import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DataTableConfig } from '../data-table/data-table.component';

@Component({
  selector: 'app-tabbed-data-table',
  templateUrl: './tabbed-data-table.component.html',
  styleUrls: ['./tabbed-data-table.component.scss']
})
export class TabbedDataTableComponent implements OnInit, OnChanges {

  @Input() config: DataTableConfig;
  @Input() data: any[];

  activeTab: string;
  tabbedData: TabbedDataTableTab[];
  tabs: string[];
  chunked: string[][];
  activeTable: any;

  maxTabs = 9;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.sortDataToTabbed(this.config.tabSeparatorKey, this.data);
  }

  sortDataToTabbed(tabSeperatorKey: string, data: any[]) {
    const tabbedData: TabbedDataTableTab[] = [];
    data.forEach(dataItem => {
      const tabIndex = tabbedData.findIndex((tabData: TabbedDataTableTab) => {
        return tabData.label === dataItem[tabSeperatorKey];
      });
      if (tabIndex === -1) {
        tabbedData.push(<TabbedDataTableTab> { label: dataItem[tabSeperatorKey], data: [dataItem]});
      } else {
        tabbedData[tabIndex].data.push(dataItem);
      }
    });

    this.tabbedData = tabbedData;
    this.tabs = this.getTabLabels(this.tabbedData);
    this.activeTab = this.tabs[0];
    this.activeTable = this.tabbedData && this.tabbedData[0] ? this.tabbedData[0].data : undefined;
    this.chunked = this.chunkTabs();
  }

  chunkTabs() {
    let lastIndex = 0;
    const temp: string[][] = [[]];
    this.tabs.forEach((tab: string) => {
      if (temp[lastIndex].length < this.maxTabs) {
        temp[lastIndex].push(tab);
      } else {
        temp.push([tab]);
        lastIndex++;
      }
    });

    return temp;
  }


  getTabLabels(tabbedData: TabbedDataTableTab[]): string[] {
    return tabbedData.map((tabbedDataItem: TabbedDataTableTab) => {
      return tabbedDataItem.label;
    });
  }

  getTableByTabKey(tabKey: string, tabbedData: TabbedDataTableTab[]) {
    this.activeTab = tabKey;
    this.activeTable = tabbedData.filter((tabbedDataItem: TabbedDataTableTab) => {
      return tabbedDataItem.label === tabKey;
    })[0].data;
  }

  isFirstTab(index: number) {
    return index === 0;
  }

  isLastTab(index: number, chunk: string[]) {
    return index === chunk.length - 1;
  }
}

export interface TabbedDataTableTab {
  label?: string;
  data?: any[];
}


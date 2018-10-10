import { DataTableConfig, DataTableHeader, RowLiftOverride } from '../components/tables/data-table/data-table.component';
import { ButtonConfig } from '../components/presentation/buttons/iconic-button/iconic-button.component';

export class Tables {

  /**
   * Versions Table
   * @type {any[]}
   */
  static Versions: DataTableConfig = <DataTableConfig> {
    headers: [
      <DataTableHeader> {
        label: 'Total Cost',
        dataKey: 'Cost',
        dataType: 'currency',
        prefix: '$'
      },
      <DataTableHeader> {
        label: 'Save Type',
        dataKey: 'SaveType'
      },
      <DataTableHeader> {
        label: 'Version Description',
        dataKey: 'versionDescription'
      },
      <DataTableHeader> {
        label: 'Comment',
        dataKey: 'Comment'
      }
    ],
    actions: [
      <ButtonConfig> {
        label: 'Upload Files',
        small: true,
        cssOverride: 'card-action'
      },
      <ButtonConfig> {
        label: 'Trigger Run',
        small: true,
        cssOverride: 'card-action'
      }
    ],
    selectorKey: 'versions'
  };

  static OpexSummary: DataTableConfig = <DataTableConfig> {
    headers: [
      <DataTableHeader> {
        label: 'Cost Type',
        dataKey: 'Cost_Type'
      },
      <DataTableHeader> {
        label: 'Year 0',
        dataKey: 'Planning_Year_Y0'
      },
      <DataTableHeader> {
        label: 'Year 1',
        dataKey: 'Planning_Year_Y1'
      },
      <DataTableHeader> {
        label: 'Year 2',
        dataKey: 'Planning_Year_Y2'
      },
      <DataTableHeader> {
        label: 'Year 3',
        dataKey: 'Planning_Year_Y3'
      },
      <DataTableHeader> {
        label: 'Year 4',
        dataKey: 'Planning_Year_Y4'
      },
      <DataTableHeader> {
        label: 'Year 5',
        dataKey: 'Planning_Year_Y5'
      },
    ],
    groupedByLevel: true,
    levelSeparatorKey: 'sort',
    tabSeparatorKey: 'Region',
    selectorKey: 'opexSummary'
  };

  static RechargesSummary: DataTableConfig = <DataTableConfig> {
    headers: [
      <DataTableHeader> {
        label: 'Region',
        dataKey: 'Region'
      },
      <DataTableHeader> {
        label: 'Year 0',
        dataKey: 'Planning_Year_Y0',
        dataType: 'currency',
        prefix: '$'
      },
      <DataTableHeader> {
        label: 'Year 1',
        dataKey: 'Planning_Year_Y1',
        dataType: 'currency',
        prefix: '$'
      },
      <DataTableHeader> {
        label: 'Year 2',
        dataKey: 'Planning_Year_Y2',
        dataType: 'currency',
        prefix: '$'
      },
      <DataTableHeader> {
        label: 'Year 3',
        dataKey: 'Planning_Year_Y3',
        dataType: 'currency',
        prefix: '$'
      },
      <DataTableHeader> {
        label: 'Year 4',
        dataKey: 'Planning_Year_Y4',
        dataType: 'currency',
        prefix: '$'
      },
      <DataTableHeader> {
        label: 'Year 5',
        dataKey: 'Planning_Year_Y5',
        dataType: 'currency',
        prefix: '$'
      },
    ],
    groupedByLevel: true,
    levelSeparatorKey: 'orderid',
    tabSeparatorKey: 'Business_Entity',
    selectorKey: 'rechargesSummary'
  };


  static DirectCosts: DataTableConfig = <DataTableConfig> {
    headers: [
      <DataTableHeader> {
        label: 'Cost Type',
        dataKey: 'Cost_Type',
        dataType: 'string',
      },
      <DataTableHeader> {
        label: 'Plan Year 0',
        dataKey: 'Planning_Year_Y0',
        dataType: 'currency',
        prefix: '$'
      },
      <DataTableHeader> {
        label: 'Plan Year 1',
        dataKey: 'Planning_Year_Y1',
        dataType: 'currency',
        prefix: '$'
      },
      <DataTableHeader> {
        label: 'Plan Year 2',
        dataKey: 'Planning_Year_Y2',
        dataType: 'currency',
        prefix: '$'
      },
      <DataTableHeader> {
        label: 'Plan Year 3',
        dataKey: 'Planning_Year_Y3',
        dataType: 'currency',
        prefix: '$'
      },
      <DataTableHeader> {
        label: 'Plan Year 4',
        dataKey: 'Planning_Year_Y4',
        dataType: 'currency',
        prefix: '$'
      },
      <DataTableHeader> {
        label: 'Plan Year 5',
        dataKey: 'Planning_Year_Y5',
        dataType: 'currency',
        prefix: '$'
      }
    ],
    rowLiftOverrides: [
      <RowLiftOverride> {
        label: 'Bottom-Up Direct Cost',
        columnKey: 'Cost_Type'
      }
    ],
    groupedByLevel: true,
    levelSeparatorKey: 'Level_Type',
    tabSeparatorKey: 'Region',
    selectorKey: 'directCostsSummary'
  };

}

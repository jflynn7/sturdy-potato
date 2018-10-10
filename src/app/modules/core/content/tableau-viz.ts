import { environment } from '../../../../environments/environment';

export class TableauViz {

  // Utils
  static getBase = () => {
    return environment.env === 'prod'
      ? 'https://cremi-tableau.deloittecloud.co.uk'
      : 'https://cre-tableau.deloittecloud.co.uk';
  }

  static trusted = (ticket: string) => `${TableauViz.getBase()}/trusted/${ticket}`;

  static build = (ticket: string, endpoint: string, embed: boolean = false) => {
    return <TableauVizConfig> {
      url: `${TableauViz.trusted(ticket)}/${endpoint}`,
      embed: embed
    };
  }

  static SelfService = (ticket: string) => {
    return TableauViz.build(ticket, 'projects');
  }

  static PlanningTemplates = (ticket: string) => {
    return TableauViz.build(ticket, 'views/Planning-CurrentTemplatesDev/PWERent');
  }

  static PreviousTemplatesView = (ticket: string) => {
    return TableauViz.build(ticket, 'views/HistoricalComparativeData_1/DirectCosts');
  }

  static TableauDemo = (ticket: string) => {
    return TableauViz.build(ticket, 'views/Planning-ToolDemonstrationTest/GlobalOverview');
  }

  static BillingSelfService = (ticket: string) => {
    return TableauViz.build(ticket, 'views/Planning-ToolDemonstrationTest/GlobalOverview');
  }

  static ErrorQuality = (ticket: string) => {
    return TableauViz.build(ticket, 'views/DataQualityPlanning/Summary');
  }

  static RechargesSummary = (ticket: string) => {
    return TableauViz.build(ticket, 'views/RechargesIFRS16/1_1SummaryRechargesCountry', true);
  }

  static OpexSummary = (ticket: string) => {
    return TableauViz.build(ticket, 'views/OpexIFRS16/OpexTable', true);
  }

  static VariableOccupancy = (ticket: string) => {
    return TableauViz.build(ticket, 'views/VariableOccupancy/Dashboard1', true);
  }

  static DirectCosts = (ticket: string) => {
    return TableauViz.build(ticket, 'views/DirectCosts_0/IFRS16SummaryDirectCosts', true);
  }

  static CRERatesSummary = (ticket: string) => {
    return TableauViz.build(ticket, 'views/Billing-BuildingRatesTest/ViewCREBuildingRates', true);
  }

  static FMSPage = (ticket: string) => {
    return TableauViz.build(ticket, 'views/Billing-QuantityTest/ViewFMS', true);
  }

  static CapitalSpend = (ticket: string) => {
    return TableauViz.build(ticket, 'views/CapitalSpendSummary/CapitalSpendSummaryDashboard?:embed=y', true);
  }

  static RechargesCTTB = (ticket: string) => {
    return TableauViz.build(ticket, 'views/Billing-RxQTest/RechargeSummary', true);
  };

  static CREManagementRates = (ticket: string) => {
    return TableauViz.build(ticket, 'views/Billing-ManagementRatesTest/ViewCREManagementRates', true);
  }
}

export interface TableauVizConfig {
  url?: string;
  embed?: boolean;
}

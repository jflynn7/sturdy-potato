export class Routes {

  // Core
  static DASHBOARD = '';
  static USERS = 'users';
  static SETTINGS = 'settings';
  static PLANNING_DASHBOARD = 'planning';
  static BILLING_DASHBOARD = 'billing';
  static ERROR = 'error';
  static PAGE_NOT_FOUND = '404';

  // Planning
  static OPEX_SUMMARY = 'opex-summary';
  static DIRECT_COSTS = 'direct-costs';
  static MANUAL_ALLOCATION = 'manual-allocation';
  static RECHARGES = 'recharges-summary';
  static SUBMIT_AOP = 'save-or-submit';
  static RATE_SETTING = 'rate-setting';
  static FILE_UPLOAD = 'file-upload';
  static TRIGGER_RUN = 'trigger-run';
  static APPROVALS = 'approvals';
  static RATES_GROUP = 'rates-group';
  static SAVED_RUNS = 'saved-runs';
  static VARIABLE_OCCUPANCY = 'variable-occupancy';
  static CAPITAL_SPEND = 'capital-spend-summary';

  static planning = (route: string) => `planning/${route}`;
}

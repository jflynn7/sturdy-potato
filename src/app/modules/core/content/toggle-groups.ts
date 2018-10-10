import { ToggleConfig } from '../components/presentation/buttons/toggle-group/toggle-group.component';

export class ToggleGroups {

  static DashboardSelectToggles = [
    <ToggleConfig> {
      label: 'Planning and Forecasting',
      id: 'planning'
    },
    <ToggleConfig> {
      label: 'Billing and Recharging',
      id: 'billing'
    }
  ];
}

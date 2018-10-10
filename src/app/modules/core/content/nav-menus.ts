import { NavigateTo } from '../state/core-ui/core-ui.actions';
import { ButtonConfig } from '../components/presentation/buttons/iconic-button/iconic-button.component';
import { Routes } from './routes';

export class NavMenus {

  static PlanningDashboard = [
    <ButtonConfig> {
      label: 'Dashboard',
      id: 'planning',
      action: new NavigateTo(Routes.PLANNING_DASHBOARD)
    },
    <ButtonConfig> {
      label: 'Upload Files',
      id: 'file-upload',
      action: new NavigateTo(Routes.planning(Routes.FILE_UPLOAD))
    },
    <ButtonConfig> {
      label: 'Trigger Run',
      id: 'trigger-run',
      action: new NavigateTo(Routes.planning(Routes.TRIGGER_RUN))
    },
    <ButtonConfig> {
      label: 'Rate Settings',
      id: 'rate-settings',
      action: new NavigateTo(Routes.planning(Routes.RATE_SETTING))
    }
  ];

}

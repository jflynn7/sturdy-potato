import { Icons } from '../../../icon-utils';
import { ButtonConfig } from '../components/presentation/buttons/iconic-button/iconic-button.component';

export class Buttons {

  static Logout = <ButtonConfig> {
    label: 'Log Out',
    small: true,
    icon: Icons.logout,
    fn: () => { console.log('Logout clicked'); }
  };

}

import { Component, OnInit } from '@angular/core';
import { ButtonConfig } from '../presentation/buttons/iconic-button/iconic-button.component';
import { ToggleConfig } from '../presentation/buttons/toggle-group/toggle-group.component';
import { Buttons } from '../../content/buttons';
import { ToggleGroups } from '../../content/toggle-groups';
import { NavMenus } from '../../content/nav-menus';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dashboardSelectToggles: ToggleConfig[];
  logout: ButtonConfig;

  constructor() { }

  ngOnInit() {
    this.logout = Buttons.Logout;
    this.dashboardSelectToggles = ToggleGroups.DashboardSelectToggles;
  }

  handleClick(button: ButtonConfig) {
    button.fn();
  }

  getCurrentPage() {
    const currentUrl = window.location.href;
    const finalPath = currentUrl.split('/');
    const navigationKey = finalPath[finalPath.length - 1];
    return navigationKey;
  }

  getNavOptions() {
    return NavMenus.PlanningDashboard;
  }

}

import { Action } from '@ngrx/store';

interface MenuItem {
  label?: string;
  routerLink?: string;
  action?: Action;
  icon?: string;
}

interface SideMenuState {
  isShown: boolean;
  menuItems: MenuItem[];
}

export const initialState: SideMenuState = {
  isShown: false,
  menuItems: []
};

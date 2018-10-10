import { Action } from '@ngrx/store';
import { CoreDataStateActionTypes } from '../core-data.actions';

export class WriteCtrlYear implements Action {
  readonly type: string = CoreDataStateActionTypes.WRITE_CTRL_YEAR;
  constructor(public payload?: any) {}
}

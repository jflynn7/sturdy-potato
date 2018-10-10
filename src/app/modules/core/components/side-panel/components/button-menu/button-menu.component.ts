import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { ButtonConfig } from '../../../presentation/buttons/iconic-button/iconic-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss'],

  // Button should only require re-rendering when @Input changes,
  // so exclude from change detection unless 'OnPush' to help
  // performance
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonMenuComponent implements OnInit {

  @Input() data: ButtonMenuConfig;

  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit() {
  }

  /**
   * Dispatch action or call function passed
   * as ButtonConfig
   * @param {Action} action
   */
  handleClick(itemClicked: ButtonConfig) {
    if (itemClicked.action) {
      this.store.dispatch(itemClicked.action);
    } else if (itemClicked.fn) {
      itemClicked.fn();
    } else {
      this.router.navigate([itemClicked.navRoute]);
    }
  }

}

export interface ButtonMenuConfig {
  title?: string;
  options?: ButtonConfig[];
}

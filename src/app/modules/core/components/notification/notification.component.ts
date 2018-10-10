import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectActiveNotification } from '../../state/core-ui/core-ui.selectors';
import { timer } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notification: NotificationConfig;
  notificationShown: boolean = false;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(
      select(selectActiveNotification())).subscribe((notification: NotificationConfig) => {
      this.notification = notification;
      this.notificationShown = true;

      if (this.notification) {
        timer(this.notification.delay).subscribe(() => {
          this.notificationShown = false;
        });
      }
    });
  }

}

export interface NotificationConfig {
  message?: string;
  type?: NotificationType;
  delay?: number;
}

export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info'
}

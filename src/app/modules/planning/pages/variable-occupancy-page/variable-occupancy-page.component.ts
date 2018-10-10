import { Component, Injector, OnInit } from '@angular/core';
import { TableauViz, TableauVizConfig } from '../../../core/content/tableau-viz';
import { PageBaseComponent } from '../../../core/pages/page-base/page-base.component';
import { select } from '@ngrx/store';
import { selectDataByKey } from '../../../core/state/core-data/core-data.selectors';
import { ShowNotification } from '../../../core/state/core-ui/core-ui.actions';
import { NotificationConfig, NotificationType } from '../../../core/components/notification/notification.component';
import { Settings } from '../../../core/content/settings';

@Component({
  selector: 'app-variable-occupancy-page',
  templateUrl: './variable-occupancy-page.component.html',
  styleUrls: ['./variable-occupancy-page.component.scss']
})
export class VariableOccupancyPageComponent extends PageBaseComponent implements OnInit {

  viz: TableauVizConfig;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.store.pipe(select(selectDataByKey('tableau'))).subscribe((data: { ticket: string }) => {
      if (data) {
        this.viz = TableauViz.VariableOccupancy(data.ticket);
      } else {
        this.store.dispatch(new ShowNotification(
          <NotificationConfig>
            {
              message: 'There was a problem loading the Tableau visualisation',
              type: NotificationType.ERROR,
              delay: Settings.config().notificationDelay
            }
          )
        );
      }

    });
  }

}

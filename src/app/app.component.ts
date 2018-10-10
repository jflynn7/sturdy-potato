import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { TableauViz } from './modules/core/content/tableau-viz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (environment.env !== 'prod' && environment.env !== 'preprod') {
      console.log('---------------------------------------------');
      console.log('Environment: ', environment.env);
      console.log('---------------------------------------------');
      const appLoadMarker = (new Date()).getTime();
      const timeToInit = appLoadMarker - window['initMetricTime'];
      console.log('Time to mount app: ', timeToInit + 'ms');
      console.log('---------------------------------------------');
    }
  }
}

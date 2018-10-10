import { Component, Injector, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormService } from '../../services/form.service';
import { RestService } from '../../services/rest.service';
import { PanelService } from '../../services/panel.service';

@Component({
  selector: 'app-page-base',
  templateUrl: './page-base.component.html',
  styleUrls: ['./page-base.component.scss']
})
export class PageBaseComponent implements OnInit {

  protected store: Store<any>;
  protected panelService: PanelService;
  protected restService: RestService;
  protected formService: FormService;

  constructor(private injector: Injector) {
    this.store = injector.get(Store);
    this.panelService = injector.get(PanelService);
    this.restService = injector.get(RestService);
    this.formService = injector.get(FormService);
  }

  ngOnInit() {
  }

}

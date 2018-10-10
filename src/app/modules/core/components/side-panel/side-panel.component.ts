import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PanelComponent, PanelState, SidePanel } from './state/side-panel.reducers';
import { SetPanelStateController, ToggleSidePanelVisibility } from './state/side-panel.actions';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PanelComponentDirective } from './directives/panel-component.directive';
import { selectPanelStateByController } from "./state/side-panel.selectors";

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class SidePanelComponent implements OnInit {

  @Input() panelStateController: string;
  @Input() panelStyle: string;

  @ViewChild(PanelComponentDirective) appPanelComponent: PanelComponentDirective;

  shown = false;
  title: string;

  constructor(private store: Store<any>, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.store.subscribe(() => {
      this.store.pipe(
        select(selectPanelStateByController(this.panelStateController)))
        .subscribe((panelState: PanelState) => {
          this.shown = panelState.isShown;
          this.loadSidePanelComponent(panelState.activePanel);
        });
    });
  }

  hideMenu() {
    this.store.dispatch(new SetPanelStateController(this.panelStateController));
    this.store.dispatch(new ToggleSidePanelVisibility(false));
  }

  loadSidePanelComponent(activePanel: SidePanel) {
    if (activePanel) {
      this.title = activePanel.title;
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(activePanel.component);
      const viewContainerRef = this.appPanelComponent.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<PanelComponent>componentRef.instance).data = activePanel.data;
      (<PanelComponent>componentRef.instance).formId = activePanel.id;
      (<PanelComponent>componentRef.instance).inputId = activePanel.inputId;
    }
  }
}

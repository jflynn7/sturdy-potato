import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPanelComponent]'
})
export class PanelComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

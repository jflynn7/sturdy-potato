import { Component, Input, OnInit } from '@angular/core';
import { Action } from "@ngrx/store";

@Component({
  selector: 'app-iconic-button',
  templateUrl: './iconic-button.component.html',
  styleUrls: ['./iconic-button.component.scss']
})
export class IconicButtonComponent implements OnInit {

  @Input() options: ButtonConfig;

  constructor() { }

  ngOnInit() {
  }

}

export interface ButtonConfig {
  icon?: string;
  label?: string;
  outline?: boolean;
  small?: boolean;
  action?: Action;
  fn?: Function;
  cssOverride?: string;
  navRoute?: string;
}

import {Component, Input, OnInit} from '@angular/core';
import {ButtonConfig} from "../../buttons/iconic-button/iconic-button.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() actions: ButtonConfig[];

  constructor() { }

  ngOnInit() {
  }

}

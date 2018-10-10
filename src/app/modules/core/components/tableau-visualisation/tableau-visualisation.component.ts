import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tableau-visualisation',
  templateUrl: './tableau-visualisation.component.html',
  styleUrls: ['./tableau-visualisation.component.scss']
})
export class TableauVisualisationComponent implements OnInit {

  @ViewChild('vizContainer') vizContainer: ElementRef;

  @Input() vizUrl: string;

  constructor() { }

  ngOnInit() {
    const Tableau = window['tableau'];
    const viz: any = new Tableau.Viz(this.vizContainer.nativeElement, this.vizUrl);
  }

}

import { Component, OnInit } from '@angular/core';
import { ItemMap } from '../item-map.service';

@Component({
  selector: 'app-home',
  template: `
    

<div *ngFor="let item of Map.critical_list" style="margin-bottom:16px;">
  <expandable-item [item]="item"></expandable-item></div>

  `,
  styles: [
  ]
})
export class HomeComponent {

  map: any;

  constructor(public Map: ItemMap) {
    this.map = Map.map;
    // console.log('text is',this.txt);


  }
}

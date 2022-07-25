import { Component, OnInit } from '@angular/core';
import { ItemMap } from './item-map.service';

@Component({
  selector: 'app-home',
  template: `
    

<div *ngFor="let item of Map.critical_list" style="margin-bottom:16px;">
  <expandable-item [item]="item"></expandable-item></div>

  <form (submit)="search($event,query.value)"><input type="text" placeholder="Find Item" #query><button mat-raised-button>Find</button></form>

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
  search(event:any,query:string) {
    if(this.map[query]) {
      this.Map.critical_list.push(query);
    } else {
      alert('does not match');
    }
    event.preventDefault();
  }
}

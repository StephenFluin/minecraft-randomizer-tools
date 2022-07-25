import { Component, Input } from "@angular/core";
import { ItemMap } from "./item-map.service";

@Component({
//   standalone: true,
  selector: 'expandable-item',
  template: `
    <ng-container *ngIf="!open"><span class="item">{{item}}</span>
     <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5M7,12L12,17V14H16V10H12V7L7,12Z" />
</svg>
 <span class="item" (click)="toggle($event)" (contextmenu)="fork($event,map.map[item])" style="font-weight:bold">{{map.map[item]}}</span></ng-container>
    <ng-container *ngIf="open"><span (click)="toggle($event)" class="item">{{item}}</span> 
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5M7,12L12,17V14H16V10H12V7L7,12Z" />
</svg>
 <expandable-item [item]="map.map[item]"></expandable-item></ng-container>
  <style> .item {
    background-color: #E3E3E3;
    font-weight:bold;
    padding: 4px;
    border-radius:3px;
    margin-bottom:6px;
    cursor: pointer;
  }
  </style>
  `,
})
export class ExpandableItem {
    @Input() item: any;
    public open: boolean = false;
    constructor(public map: ItemMap) {

    }
    toggle(event: any) {
        this.open = !this.open;
        console.log("open is now",this.open);
        event.preventDefault();
    }
    fork(event:any, item:string) {
        this.map.critical_list.push(item)
        event.preventDefault();
    }
  // component logic
}
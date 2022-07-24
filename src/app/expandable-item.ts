import { Component, Input } from "@angular/core";
import { ItemMap } from "./item-map.service";

@Component({
//   standalone: true,
  selector: 'expandable-item',
  template: `
    <ng-container *ngIf="!open">{{item}} from <span (click)="toggle($event)" (contextmenu)="fork($event,map.map[item])">{{map.map[item]}}</span></ng-container>
    <ng-container *ngIf="open">{{item}} from <expandable-item [item]="map.map[item]"></expandable-item></ng-container>
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
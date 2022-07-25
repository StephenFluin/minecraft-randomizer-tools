import { Component, OnInit } from '@angular/core';
import { ItemMap } from '../item-map.service';

@Component({
  selector: 'app-cheat-sheet',
  template: `
    <h2>Switch Seeds</h2>
    <div>
      <button mat-raised-button color="primary" (click)="update(area.value)">Update</button>
</div>
  <textarea style="max-width:100%;width:500px;height:200px;" #area>{{Map.txt}}</textarea>
  <div>
      <button mat-raised-button color="primary" (click)="update(area.value)">Update</button>
</div>
  `,
  styles: [
  ]
})
export class CheatSheetComponent {

  constructor(public Map: ItemMap) { }
  update(newText: string) {
    this.Map.initialize(newText);
  }

}

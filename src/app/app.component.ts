import { Component } from '@angular/core';
import { ItemMap } from './item-map.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minecraft-randomizer-tools';

  map: any;
  
  constructor(public Map: ItemMap) {
    this.map = Map.map;
    // console.log('text is',this.txt);
    

  }

  
}

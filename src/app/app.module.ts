import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './routes';
import { AppComponent } from './app.component';
import { ExpandableItem } from './expandable-item';
import { RouterModule } from '@angular/router';
import { CheatSheetComponent } from './cheat-sheet/cheat-sheet.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpandableItem,
    CheatSheetComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

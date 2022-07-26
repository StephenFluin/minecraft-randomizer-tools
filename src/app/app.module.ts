import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './routes';
import { AppComponent } from './app.component';
import { ExpandableItem } from './expandable-item';
import { RouterModule } from '@angular/router';
import { CheatSheetComponent } from './cheat-sheet.component';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RememberComponent } from './remember.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpandableItem,
    CheatSheetComponent,
    HomeComponent,
    NavComponent,
    RememberComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes } from "@angular/router";
import { CheatSheetComponent } from "./cheat-sheet.component";
import { HomeComponent } from "./home.component";
import { RememberComponent } from "./remember.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cheatsheet', component: CheatSheetComponent},
    {path: 'remember', component: RememberComponent},
];
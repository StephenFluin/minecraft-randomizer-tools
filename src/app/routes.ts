import { Routes } from "@angular/router";
import { CheatSheetComponent } from "./cheat-sheet/cheat-sheet.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cheatsheet', component: CheatSheetComponent},
];
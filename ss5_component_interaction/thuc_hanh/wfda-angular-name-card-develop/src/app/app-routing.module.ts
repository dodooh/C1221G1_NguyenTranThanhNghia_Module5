import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {Th5MainComponent} from "./ss5/thuc_hanh/th5-main/th5-main.component";
import {AppComponent} from "./app.component";
import {Bt5MainComponent} from "./ss5/bai_tap/bt5-main/bt5-main.component";


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'ss5-th', component: Th5MainComponent},
  {path: 'ss5-bt', component: Bt5MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

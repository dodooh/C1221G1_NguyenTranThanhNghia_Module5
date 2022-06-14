import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { TimelinesComponent } from './timelines/timelines.component';
const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent,
  },
];
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameCardComponent } from './ss5/thuc_hanh/name-card/name-card.component';
import { HomeComponent } from './home/home.component';
import { Th5MainComponent } from './ss5/thuc_hanh/th5-main/th5-main.component';
import { ProgressBarComponent } from './ss5/thuc_hanh/progress-bar/progress-bar.component';
import { RatingBarComponent } from './ss5/bai_tap/rating-bar/rating-bar.component';
import { Bt5MainComponent } from './ss5/bai_tap/bt5-main/bt5-main.component';
import { CountDownComponent } from './ss5/bai_tap/count-down/count-down.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    HomeComponent,
    Th5MainComponent,
    ProgressBarComponent,
    RatingBarComponent,
    Bt5MainComponent,
    CountDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

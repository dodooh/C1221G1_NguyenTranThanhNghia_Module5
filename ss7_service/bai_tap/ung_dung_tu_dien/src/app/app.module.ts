import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DictionaryPageComponent } from './dictionary/dictionary-page/dictionary-page.component';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryDetailComponent } from './dictionary/dictionary-detail/dictionary-detail.component';

const routes: Routes = [
  {
    path: 'dictionary/:word',
    component: DictionaryDetailComponent,
  },
  {
    path: '',
    component: DictionaryPageComponent,
  },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    HelloComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

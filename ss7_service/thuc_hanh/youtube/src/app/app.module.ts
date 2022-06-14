import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
const routes: Routes = [
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [
      {
        path: ':id',
        component: YoutubePlayerComponent,
      },
    ],
  },
];
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

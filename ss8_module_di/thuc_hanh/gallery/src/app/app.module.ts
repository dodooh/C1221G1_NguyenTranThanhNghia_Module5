import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ImageGalleryModule } from './image-gallery/image-gallery.module';
import { GalleryConfig } from './image-gallery/token';

@NgModule({
  imports: [BrowserModule, FormsModule,ImageGalleryModule],
  declarations: [AppComponent, HelloComponent, ],
  providers: [{ provide: GalleryConfig, useValue: 3 }],
  bootstrap: [AppComponent],
})
export class AppModule {}

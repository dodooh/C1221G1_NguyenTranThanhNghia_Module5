import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery.component';
import { ImageCardComponent } from './image-card/image-card.component';

@NgModule({
  declarations: [ImageGalleryComponent, ImageCardComponent],
  exports: [ImageGalleryComponent],
  imports: [CommonModule],
})
export class ImageGalleryModule {}

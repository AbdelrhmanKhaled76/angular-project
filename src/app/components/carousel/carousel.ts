import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  images: string[] = ['./1.jpeg', './2.jpeg', './3.jpeg'];
  imageCounter: number = 0;

  currentImage: string = this.images[0];

  changeImageNext(): void {
    this.imageCounter = (this.imageCounter + 1) % this.images.length;
    this.currentImage = this.images[this.imageCounter];
  }

  changeImagePrev(): void {
    this.imageCounter = (this.imageCounter - 1 + this.images.length) % this.images.length;
    this.currentImage = this.images[this.imageCounter];
  }

  changeImageUsingIndex(idx : number): void{
    this.imageCounter = idx;
    this.currentImage = this.images[idx];
  }
}

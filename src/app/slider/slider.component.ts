import { Component, OnInit } from '@angular/core';
import { Image } from '../Image';
import { SlideService } from '../slide.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  currentSlide: number;
  images: Image[];  

  constructor(private slideService: SlideService) { }

  ngOnInit() {
    this.getSlides();
  }

  getSlides(): void {
    this.slideService.getSlides()
      .subscribe(slides => {
        this.images = slides;
        this.currentSlide = 0;
      });
  }

  next() {
    let slidesLength = this.images.length;
    this.currentSlide++;
    if (this.currentSlide >= slidesLength) {
      this.currentSlide = 0;
    }
  }

  prev() {
    let slidesLength = this.images.length;
    this.currentSlide--;
    if (this.currentSlide < 0) {
      this.currentSlide = slidesLength -1;
    }
  }

  goTo(i) {
    this.currentSlide = i;
  }
}

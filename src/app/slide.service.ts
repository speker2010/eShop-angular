import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Image } from './Image';
import { SLIDES } from './mock-slides';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  constructor() { }

  getSlides(): Observable<Image[]> {
    return of(SLIDES);
  }
}

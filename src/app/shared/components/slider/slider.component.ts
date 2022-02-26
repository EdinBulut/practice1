import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  config: SwiperOptions = {
    // pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 0,
    slidesPerView: 4,
    slidesPerGroup:1,
    // centeredSlides:true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false
    },

    // effect: 'coverflow',
    grabCursor: false,
    // slidesPerView: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 2000,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1250: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      100: {
        slidesPerView: 1,
        spaceBetween: 20
      },
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}

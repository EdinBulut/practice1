import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild ('slider', { static: false }) slider!: ElementRef<HTMLElement>

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }
  
  scrollToBottom() {
    // window.scroll(0,10000)
    this.slider.nativeElement.scrollIntoView({behavior: "smooth", block: "start"})
  }
   
}

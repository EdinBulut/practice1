import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
 
  isScrolled = false;

 
 
  constructor(private router: Router,) { 
    
  }
  @HostListener("window:scroll")
  scrollEvent() {
      window.pageYOffset >= 50 ? (this.isScrolled = true) : (this.isScrolled = false);
  }
  
  ngOnInit(): void {
    console.log(this.isScrolled,"hshshshshshsh");
  }
  // onWindowScroll() {
  //   let element = document.querySelector('.nav-container') as HTMLElement;
  //   if (window.pageYOffset > element.clientHeight) {
  //     element.classList.add('navbar-inverse');
  //     console.log("navigacija 111111111")
  //   } else {
  //     element.classList.remove('navbar-inverse')
  //     console.log("navigacija 2");
  //   }
  // }
}

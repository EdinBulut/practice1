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
  constructor(private router: Router,) { }
  @HostListener("window:scroll")
  scrollEvent() {
      window.pageYOffset >= 60 ? (this.isScrolled = true) : (this.isScrolled = false);
  }
  
  ngOnInit(): void {
  }

}

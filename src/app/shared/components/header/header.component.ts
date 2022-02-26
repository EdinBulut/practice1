import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
 
  isScrolled = false;
  isTransparent = false;
  language = 'BOS'
  constructor(private router: Router, private languageService: LanguageService) { }
  @HostListener("window:scroll")
  scrollEvent() {
      window.pageYOffset >= 60 ? (this.isScrolled = true) : (this.isScrolled = false);
  }
  
  ngOnInit(): void {
    
    if (localStorage.getItem('language')) {
      this.language = localStorage.getItem('language') as string
    }
  }

  changeLanguage() {
    if (this.language === 'BOS') this.language = 'EN'
    else this.language = 'BOS'
    this.languageService.postLanguage(this.language)
    localStorage.setItem('language', this.language)
  }

}

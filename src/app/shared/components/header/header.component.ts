import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  mobile = false;
  openMenu = false;

  isScrolled = false;
  isTransparent = false;
  language = 'BOS'
  constructor(
    public router: Router,
    private languageService: LanguageService,
    private route: ActivatedRoute
  ) { }
  @HostListener("window:scroll")
  scrollEvent() {
    window.pageYOffset >= 60 ? (this.isScrolled = true) : (this.isScrolled = false);
  }
  @HostListener("window:resize", [])
  onResize() {
    if (window.innerWidth <= 992) {
      this.mobile = true
    } else {
      this.mobile = false
      this.openMenu = false
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('language')) {
      this.language = localStorage.getItem('language') as string
    }
    if (window.innerWidth < 992) this.mobile = true
  }

  changeLanguage() {
    if (this.language === 'BOS') this.language = 'EN'
    else this.language = 'BOS'
    this.languageService.postLanguage(this.language)
    localStorage.setItem('language', this.language)
  }

  closeMenu() {
    this.openMenu = false
  }

}

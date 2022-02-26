import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild ('slider', { static: false }) slider!: ElementRef<HTMLElement>
  language = 'BOS'

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    window.scroll(0,0)
        
    if (localStorage.getItem('language')) {
      this.language = localStorage.getItem('language') as string
    }
    
    this.languageService.getLanguage()
    .subscribe(data => this.language = data)
  }
  
  scrollToBottom() {
    // window.scroll(0,10000)
    this.slider.nativeElement.scrollIntoView({behavior: "smooth", block: "start"})
  }
   
}

import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  language ='BOS'
  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    
    if (localStorage.getItem('language')) {
      this.language = localStorage.getItem('language') as string
    }

    this.languageService.getLanguage()
    .subscribe(data => this.language = data)
  }

}

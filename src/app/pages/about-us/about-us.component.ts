import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language.service';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  language = 'BOS'
  
  constructor(private languageService: LanguageService) {
   
   }

  ngOnInit(): void {
    window.scroll(0,0)

    this.languageService.getLanguage()
    .subscribe(data => this.language = data)
  }

  

}

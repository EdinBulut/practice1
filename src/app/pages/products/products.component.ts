import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  language = 'BOS'
  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
            
    if (localStorage.getItem('language')) {
      this.language = localStorage.getItem('language') as string
    }
    
    this.languageService.getLanguage()
    .subscribe(data => this.language = data)
  }
  
  ngAfterViewInit(): void {
    window.scroll(0,0)
  }

}

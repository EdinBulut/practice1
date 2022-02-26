import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language = new Subject<string>();

  constructor() { }

  getLanguage(): Observable<string> {
    return this.language.asObservable()
  }
  
  postLanguage(language: string): void {
    this.language.next(language)
  }
}

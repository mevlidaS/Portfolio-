import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
  } 

  public switchLanguage(language: string):void {
    this.translate.use(language);
  }
   
}

  

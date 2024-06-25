import { Component, HostListener, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { CheckLanguageService } from '../../services/check-language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isScreenSmall: boolean = false;
  open = false;

  translate = inject(TranslationService);
  languages = inject(CheckLanguageService);

  checkSize() {
    if (typeof window !== 'undefined') {
      this.isScreenSmall = window.innerWidth <= 1180;
    }
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.checkSize();
  }

  toggleMenu() {
    this.open = !this.open;
  }

  closeMenu() {
    this.open = false;
  }

  checkEnglish(){
    this.translate.switchLanguage('en');
    this.languages.languageEnglish = true;

}

checkGerman(){
  this.translate.switchLanguage('de');
  this.languages.languageEnglish = false;

}
}

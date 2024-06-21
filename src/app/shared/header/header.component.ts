import { Component, HostListener, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

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
}

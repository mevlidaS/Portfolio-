import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
translate = inject(TranslationService);

}

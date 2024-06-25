import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { GermanComponent } from './german/german.component';
import { EnglishComponent } from './english/english.component';
import { CheckLanguageService } from '../services/check-language.service';

@Component({
    selector: 'app-privacy-policy',
    standalone: true,
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss',
    imports: [HeaderComponent, GermanComponent, EnglishComponent]
})
export class PrivacyPolicyComponent {

   languages = inject(CheckLanguageService);
}

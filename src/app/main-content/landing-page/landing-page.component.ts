import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [HeaderComponent, TranslateModule]
})
export class LandingPageComponent {

}

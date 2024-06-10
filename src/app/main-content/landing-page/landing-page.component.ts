import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [HeaderComponent]
})
export class LandingPageComponent {

}

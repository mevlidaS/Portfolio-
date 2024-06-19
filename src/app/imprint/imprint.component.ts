import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-imprint',
    standalone: true,
    templateUrl: './imprint.component.html',
    styleUrl: './imprint.component.scss',
    imports: [HeaderComponent, TranslateModule]
})
export class ImprintComponent {

}

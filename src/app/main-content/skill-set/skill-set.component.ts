import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [ TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  skills: { name: string; src: string }[] = [
    { name: 'Angular', src: './assets/img/angular_icon.svg' },
    { name: 'TypeScript', src: './assets/img/typescript_icon.svg' },
    { name: 'JavaScript', src: './assets/img/javascript_icon.svg' },
    { name: 'HTML', src: './assets/img/html_icon.svg' },
    { name: 'Scrum', src: './assets/img/scrum_icon.svg' },
    { name: 'Firebase', src: './assets/img/firebase_icon.svg' },
    { name: 'GIT', src: './assets/img/git_icon.svg' },
    { name: 'CSS', src: './assets/img/css_icon.svg' },
    { name: 'Rest-Api', src: './assets/img/api_icon.svg' },
    { name: 'Material Design', src: './assets/img/material_icon.svg'},
 
  ];
}

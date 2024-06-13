import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projects: {
    src: string;
    title: string;
    technologies: string[];
    description: string;
    linkLiveTest: string;
    linkGithub: string;
    isReversed: boolean;
  }[] = [
    {
      src: './assets/img/join.svg',
      title: 'Join',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      linkLiveTest: 'https://join.mevlida-salendrkovic.de/index.html',
      linkGithub: 'https://github.com/Rondarik/Join4',
      isReversed: false,
    },
    {
      src: './assets/img/elpolloloco.svg',
      title: 'El Pollo Loco',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      linkLiveTest: 'https://el-pollo-loco.mevlida-salendrkovic.de/index.html',
      linkGithub: 'https://github.com/mevlidaS/El-Pollo-Loco',
      isReversed: true,
    },
    {
      src: './assets/img/pokedex.svg',
      title: 'Pokedex',
      technologies: ['JavaScript', 'HTML', 'CSS', 'API'],
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      linkLiveTest: 'https://pokedex.mevlida-salendrkovic.de/index.html',
      linkGithub: '',
      isReversed: false,
    },
  ];

  project!: {
    src: string;
    title: string;
    technologies: string[];
    description: string;
    linkLiveTest: string;
    linkGithub: string;
  };
}

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
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      linkLiveTest: '',
      linkGithub: '',
      isReversed: false,
    },
    {
      src: './assets/img/elpolloloco.svg',
      title: 'El Pollo Loco',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description:
        'A Slack clone app that facilitates smooth team communication and collaboration through messaging, file sharing, and customizable channels to enhance workplace efficiency.',
      linkLiveTest: '',
      linkGithub: '',
      isReversed: true,
    },
    {
      src: './assets/img/pokedex.svg',
      title: 'Pokedex',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description:
        'A Slack clone app that facilitates smooth team communication and collaboration through messaging, file sharing, and customizable channels to enhance workplace efficiency.',
      linkLiveTest: '',
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

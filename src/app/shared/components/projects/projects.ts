import { Component } from '@angular/core';
import { Project } from '../project/project';

@Component({
    selector: 'app-projects',
    imports: [Project],
    templateUrl: './projects.html',
    styleUrl: './projects.scss',
})
export class Projects {
    projects = [
        {
            name: 'Join',
            description:
                'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
            details:
                'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
            duaration: 4,
            technology: ['JavaScript', 'HTML', 'CSS'],
            image: '/images/project-images/join-laptop.png',
            github: 'www....',
            liveTest: 'wwww...',
            featured: true,
        },
        {
            name: 'ValhallaRush',
            description:
                'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
            details:
                'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
            duaration: 4,
            technology: ['JavaScript', 'HTML', 'CSS'],
            image: '/images/project-images/join-laptop.png',
            github: 'www....',
            liveTest: 'wwww...',
            featured: true,
        },
        {
            name: 'Pokedex',
            description:
                'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
            details:
                'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
            duaration: 4,
            technology: ['JavaScript', 'HTML', 'CSS'],
            image: '/images/project-images/pokedex.png',
            github: 'https://github.com/Infamous2k9/pokedex',
            liveTest: 'https://andrefunk.developerakademie.net/pokedex/',
            featured: true,
        },
    ];
}

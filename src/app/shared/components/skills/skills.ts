import { Component, signal } from '@angular/core';
import { Skill } from '../skill/skill';

@Component({
    selector: 'app-skills',
    imports: [Skill],
    templateUrl: './skills.html',
    styleUrl: './skills.scss',
})
export class Skills {
    isPeeled = signal(false);
    peel() {
        this.isPeeled.set(true);
        console.log(this.isPeeled);
    }

    skills = [
        {
            name: 'HTML',
            src: '/icons/skills/html.svg',
        },
        {
            name: 'CSS',
            src: '/icons/skills/css.svg',
        },
        {
            name: 'JavaScript',
            src: '/icons/skills/javascript.svg',
        },
        {
            name: 'TypeScript',
            src: '/icons/skills/typescript.svg',
        },
        {
            name: 'Angular',
            src: '/icons/skills/angular.svg',
        },
        {
            name: 'Supabase',
            src: '/icons/skills/supabase.svg',
        },
        {
            name: 'Git',
            src: '/icons/skills/git.svg',
        },
        {
            name: 'REST-API',
            src: '/icons/skills/rest-api.svg',
        },
        {
            name: 'Phython',
            src: '/icons/skills/Python.svg',
        },
        {
            name: 'Material Design',
            src: '/icons/skills/material-design.png',
        },
        {
            name: 'React',
            src: '/icons/skills/react.svg',
            interested: true,
        },
        {
            name: 'Vue.js',
            src: '/icons/skills/vue.svg',
            interested: true,
        },
    ];
}

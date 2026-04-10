import { Component, input } from '@angular/core';

@Component({
    selector: 'app-skill',
    imports: [],
    templateUrl: './skill.html',
    styleUrl: './skill.scss',
})
export class Skill {
    name = input.required();
    src = input.required();
}

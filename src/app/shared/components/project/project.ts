import { Component, input, signal } from '@angular/core';

@Component({
    selector: 'app-project',
    imports: [],
    templateUrl: './project.html',
    styleUrl: './project.scss',
})
export class Project {
    title = input.required();
    description = input.required();
    image = input.required();
    projectIndex = input.required();
}

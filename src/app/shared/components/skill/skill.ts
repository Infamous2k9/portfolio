import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.html',
  styleUrl: './skill.scss',
})
export class Skill {
  readonly name = input.required<string>();
  readonly icon = input.required<string>();
}

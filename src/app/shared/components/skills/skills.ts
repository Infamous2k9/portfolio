import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CURRENT_SKILLS, INTERESTED_SKILLS } from '../../../core/data/skills.data';
import { Skill } from '../skill/skill';

@Component({
  selector: 'app-skills',
  imports: [Skill, TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly currentSkills = CURRENT_SKILLS;
  protected readonly interestedSkills = INTERESTED_SKILLS;
  protected readonly isPeeled = signal(false);

  togglePeel(): void {
    this.isPeeled.update((isPeeled) => !isPeeled);
  }
}

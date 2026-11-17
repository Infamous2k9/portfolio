import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PROJECTS } from '../../../core/data/projects.data';
import { Project } from '../project/project';

@Component({
  selector: 'app-projects',
  imports: [Project, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly featuredProject = PROJECTS.find((project) => project.featured);
  protected readonly otherProjects = PROJECTS.filter((project) => !project.featured);
}

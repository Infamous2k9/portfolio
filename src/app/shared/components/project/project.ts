import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Project as ProjectModel } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-project',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './project.html',
  styleUrl: './project.scss',
  host: {
    '[class.project-card--featured]': 'featured()',
  },
})
export class Project {
  readonly project = input.required<ProjectModel>();
  /** Large layout with the round "featured" sticker. */
  readonly featured = input(false);
}

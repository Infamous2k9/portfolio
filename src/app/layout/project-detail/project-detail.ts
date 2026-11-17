import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { findProjectBySlug, getNextProject } from '../../core/data/projects.data';
import { findSkill } from '../../core/data/skills.data';
import { Skill } from '../../core/models/portfolio.models';
import { BrandLogo } from '../../shared/components/brand-logo/brand-logo';
import { Header } from '../header/header';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, TranslatePipe, Header, BrandLogo],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  /** Bound from the route param :slug (withComponentInputBinding). */
  readonly slug = input.required<string>();

  protected readonly project = computed(() => findProjectBySlug(this.slug()));
  protected readonly nextProject = computed(() => getNextProject(this.slug()));

  protected readonly technologies = computed<Skill[]>(() =>
    (this.project()?.technologies ?? [])
      .map((name) => findSkill(name))
      .filter((skill): skill is Skill => skill !== undefined),
  );
}

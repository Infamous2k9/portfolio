import { Component } from '@angular/core';
import { AboutMe } from '../../shared/components/about-me/about-me';
import { ContactMe } from '../../shared/components/contact-me/contact-me';
import { Hero } from '../../shared/components/hero/hero';
import { Projects } from '../../shared/components/projects/projects';
import { Skills } from '../../shared/components/skills/skills';
import { Testimonials } from '../../shared/components/testimonials/testimonials';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-content',
  imports: [Hero, AboutMe, Skills, Projects, Testimonials, ContactMe],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {}

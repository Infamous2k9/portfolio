import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TESTIMONIALS } from '../../../core/data/site.data';
import { Testimonial } from '../testimonial/testimonial';

@Component({
  selector: 'app-testimonials',
  imports: [Testimonial, TranslatePipe],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  protected readonly testimonials = TESTIMONIALS;
}

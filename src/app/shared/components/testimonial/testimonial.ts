import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Testimonial as TestimonialModel } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-testimonial',
  imports: [TranslatePipe],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.scss',
  host: {
    '[class.testimonial--b]': "texture() === 'b'",
  },
})
export class Testimonial {
  readonly testimonial = input.required<TestimonialModel>();
  /** Which of the two sticker textures is used as background. */
  readonly texture = input<'a' | 'b'>('a');
}

import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SnipetBackground } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-snipet',
  imports: [TranslatePipe],
  templateUrl: './snipet.html',
  styleUrl: './snipet.scss',
})
export class Snipet {
  readonly textKey = input.required<string>();
  readonly icon = input.required<string>();
  readonly background = input.required<SnipetBackground>();
}

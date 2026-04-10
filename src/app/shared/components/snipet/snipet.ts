import { Component, input } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

interface Background {
    mobile: string;
    desktop: string;
    alt: string;
}

@Component({
    selector: 'app-snipet',
    imports: [TranslatePipe],
    templateUrl: './snipet.html',
    styleUrl: './snipet.scss',
})
export class Snipet {
    text = input.required<string>();
    icon = input.required();
    background = input.required<Background>();
}

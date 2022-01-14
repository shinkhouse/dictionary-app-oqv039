import { Component, Input, OnInit } from '@angular/core';
import { WordSearchDefinition } from '../../models/dictionary.model';

@Component({
    selector: 'app-word-card',
    templateUrl: './word-card.component.html',
    styleUrls: ['./word-card.component.scss'],
})
export class WordCardComponent implements OnInit {
    @Input() word: WordSearchDefinition;
    constructor() {}

    ngOnInit() {}

    getSyllablesString(syllables): string {
        return syllables.join(' • ');
    }
}

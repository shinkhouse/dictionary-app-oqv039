import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordSearchDefinition } from '../core/models/dictionary.model';
import { DictionaryService } from '../core/services/dictionary.service';

@Component({
    selector: 'app-definition',
    templateUrl: './definition.page.html',
    styleUrls: ['./definition.page.scss'],
})
export class DefinitionPage implements OnInit {
    public word: string = '';
    public favoriteWord: boolean = false;
    public wordDefinition: WordSearchDefinition;
    constructor(private dictionary: DictionaryService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.word = this.route.snapshot.paramMap.get('word');
        console.log('route word', this.word);
        this.getWordDefinition(this.word);
    }

    getSyllablesString(syllables): string {
        return syllables.join(' • ');
    }

    getWordDefinition(word: string) {
        this.dictionary.getDictionaryDefinitions({ word }).subscribe((res) => {
            this.wordDefinition = res;
        });
    }

    toggleFavoriteWord() {
        this.favoriteWord = !this.favoriteWord;
    }
}

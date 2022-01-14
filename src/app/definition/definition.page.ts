import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordSearchDefinition } from '../core/models/dictionary.model';
import { DictionaryService } from '../core/services/dictionary.service';
import { StorageService } from '../core/services/storage.service';
@Component({
    selector: 'app-definition',
    templateUrl: './definition.page.html',
    styleUrls: ['./definition.page.scss'],
})
export class DefinitionPage implements OnInit {
    public word: string = '';
    public favoriteWord: boolean = false;
    public wordDefinition: WordSearchDefinition;
    constructor(private dictionary: DictionaryService, private route: ActivatedRoute, private storage: StorageService) {}

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
            this.addWordToRecentSearches();
        });
    }

    toggleFavoriteWord() {
        this.favoriteWord = !this.favoriteWord;
        this.addWordToFavorites();
    }

    addWordToFavorites() {
        this.storage.get('savedWords').then((res) => {
          const words = JSON.parse(res);
          words.unshift(this.wordDefinition);
          this.storage.set('savedWords', JSON.stringify(words));
        });
    }

    addWordToRecentSearches() {
      this.storage.get('recentWords').then((res) => {
          const words = JSON.parse(res);
          words.unshift(this.wordDefinition);
          this.storage.set('recentWords', JSON.stringify(words));
      });
    }
}

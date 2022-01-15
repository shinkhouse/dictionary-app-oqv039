import { Component, OnInit } from '@angular/core';
import { WordSearchDefinition } from 'src/app/core/models/dictionary.model';
import { DictionaryService } from 'src/app/core/services/dictionary.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.page.html',
    styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
    public savedWords: WordSearchDefinition[] = [];

    constructor(private dictionary: DictionaryService, private storage: StorageService) {}

    ngOnInit() {
        this.getSavedWords();
    }

    async getSavedWords() {
        const savedWords = await this.storage.get('savedWords');
        console.log('savedWords', savedWords);
        this.savedWords = JSON.parse(savedWords);
    }

    removeItem(word) {
        const savedWords = this.savedWords.filter((wordDef) => wordDef.word !== word.word);
        this.storage.set('savedWords', JSON.stringify(savedWords));
        this.savedWords = savedWords;
    }

    removeAll() {
      this.storage.set('savedWords', JSON.stringify([]));
      this.savedWords = [];
    }
}

import { Component, OnInit } from '@angular/core';
import { WordSearchDefinition } from 'src/app/core/models/dictionary.model';
import { DictionaryService } from 'src/app/core/services/dictionary.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
    selector: 'app-recent',
    templateUrl: './recent.page.html',
    styleUrls: ['./recent.page.scss'],
})
export class RecentPage implements OnInit {
    public recentWords: WordSearchDefinition[] = [];

    constructor(private dictionary: DictionaryService, private storage: StorageService) {}

    ngOnInit() {
        this.getRecentWords();
    }

    async getRecentWords() {
        const recentWords = await this.storage.get('recentWords');
        console.log('recentWords', recentWords);
        this.recentWords = JSON.parse(recentWords);
    }

    removeItem(word) {
        const recentWords = this.recentWords.filter((wordDef) => wordDef.word !== word.word);
        this.storage.set('recentWords', JSON.stringify(recentWords));
        this.recentWords = recentWords;
    }

    removeAll() {
        this.storage.set('recentWords', JSON.stringify([]));
        this.recentWords = [];
    }
}

import { Component, OnInit } from '@angular/core';
import { WordSearchDefinition } from 'src/app/core/models/dictionary.model';
import { DictionaryService } from 'src/app/core/services/dictionary.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
    public savedWords: WordSearchDefinition[] = [];
    public recentWords: WordSearchDefinition[] = [];

    constructor(private dictionary: DictionaryService, private storage: StorageService) {}

    ngOnInit() {
      this.getRecentWords();
      this.getSavedWords();
    }

    async getSavedWords() {
        const savedWords = await this.storage.get('savedWords');
        console.log('savedWords', savedWords);
        this.savedWords = JSON.parse(savedWords);
    }

    async getRecentWords() {
        const recentWords = await this.storage.get('recentWords');
        console.log('recentWords', recentWords);
        this.recentWords = JSON.parse(recentWords);
    }
}

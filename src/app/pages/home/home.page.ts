import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordSearchDefinition } from '../../core/models/dictionary.model';
import { DictionaryService } from '../../core/services/dictionary.service';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonSlides, IonicSlides } from '@ionic/angular';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { StorageService } from '../../core/services/storage.service';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    @ViewChild('featureSlidesRef', { static: true }) featureSlidesRef: IonSlides;
    @ViewChild('savedWordsSlidesRef', { static: true }) savedWordsSlidesRef: IonSlides;
    public searchQuery: any;
    searchActive: boolean;
    searchQueryChanged = new Subject<string>();
    public wordDefinition: WordSearchDefinition;
    public savedWords = [];
    public recentWords = [];

    public featureCardSlideOptions = {
        keyboard: true,
    };

    public savedWordsSlideOptions = {
        slidesPerView: 1.7,
    };
    public recentWordsSlideOptions = {
        slidesPerView: 1.4,
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private dictionary: DictionaryService,
        private storage: StorageService
    ) {}

    async ngOnInit() {
        this.searchQueryChanged.pipe(debounceTime(1000)).subscribe(() => {
            console.log(this.searchQuery);
        });
        this.getRandomWord();
        this.getSavedWords();
        this.getRecentWords();
    }

    doRefresh(ev) {
        this.getRandomWord();
        this.getSavedWords();
        this.getRecentWords();

        setTimeout(() => {
            console.log('Async operation has ended');
            ev.target.complete();
        }, 200);
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

    queryChanged() {
        this.searchQueryChanged.next();
    }

    querySubmitted() {
        this.router.navigateByUrl(`/definition/${this.searchQuery}`);
    }

    getRandomWord() {
        this.dictionary.getRandomWordFromDictionary().subscribe((res: WordSearchDefinition) => {
            this.wordDefinition = res;
            console.log(this.wordDefinition.syllables);
        });
    }

    getSyllablesString(syllables): string {
        return syllables.join(' • ');
    }

    public slideWillChange() {
        console.log('Slide will change');
    }

    public async slideDidChange() {
        console.log('Slide did change');

        if (!this.featureSlidesRef) {
            return;
        }

        console.table({
            isBeginning: await this.featureSlidesRef.isBeginning(),
            isEnd: await this.featureSlidesRef.isEnd(),
        });
    }
}

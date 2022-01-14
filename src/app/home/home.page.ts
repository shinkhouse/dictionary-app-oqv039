import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordSearchDefinition } from '../core/models/dictionary.model';
import { DictionaryService } from '../core/services/dictionary.service';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonSlides, IonicSlides } from '@ionic/angular';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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
    searchQueryChanged = new Subject<string>();
    public wordDefinition: WordSearchDefinition;
    public savedWords = ['word1', 'word2', 'wordword3', 'word4'];

    public featureCardSlideOptions = {
        keyboard: true,
    };

    public savedWordsSlideOptions = {
        slidesPerView: 2.5,
    };

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private dictionary: DictionaryService) {}

    ngOnInit() {
        this.searchQueryChanged.pipe(debounceTime(1000)).subscribe(() => {
            console.log(this.searchQuery);
        });
        // this.getRandomWord();
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

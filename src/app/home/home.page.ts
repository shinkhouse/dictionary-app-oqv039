import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordDefinition } from '../core/models/dictionary.model';
import { DictionaryService } from '../core/services/dictionary.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public wordDefinition: WordDefinition;

  constructor(private activatedRoute: ActivatedRoute, private dictionary: DictionaryService) { }

  ngOnInit() {
    this.getRandomWord();
  }

  getRandomWord() {
    this.dictionary.getRandomWordFromDictionary().subscribe((res: WordDefinition) => {
        this.wordDefinition = res;
    });
  }
}

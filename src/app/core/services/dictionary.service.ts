import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class DictionaryService {
    constructor(private http: HttpClient) {}

    getDictionaryDefinitions(params: any): Observable<any> {
        const url = `https://api.samuelhinkhouse.com/dictionary/words/${params.word}`;

        return this.http.get(url).pipe(
            tap((definitions) => definitions),
            catchError(this.handleError('getWeather', []))
        );
    }

    getRandomWordFromDictionary() {
        const url = `https://api.samuelhinkhouse.com/dictionary/random`;

        return this.http.get(url).pipe(map((res) => res));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}

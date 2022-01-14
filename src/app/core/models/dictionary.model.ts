export interface WordDefinition {
    word: string;
    results: Result[];
    syllables: Syllables;
    pronunciation: Pronunciation;
    frequency: number;
}

export interface Pronunciation {
    all: string;
}

export interface Result {
    definition: string;
    partOfSpeech: string;
    synonyms: string[];
    examples: string[];
}

export interface Syllables {
    count: number;
    list: string[];
}

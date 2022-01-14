export interface WordSearchDefinition {
    word?: string;
    results?: Result[];
    syllables?: Syllables;
    pronunciation?: Pronunciation | string;
    frequency?: number;
}

export interface Pronunciation {
    all?: string;
}

export interface Result {
    definition?: string;
    partOfSpeech?: string;
    synonyms?: string[];
    examples?: string[];
    typeOf?: string[];
    hasTypes?: string[];
    derivation?: string[];
}

export interface Syllables {
    count?: number;
    list?: string[];
}

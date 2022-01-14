import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    constructor() {}

    // Create and expose methods that users of this service can
    // call, for example:
    public set(key: string, value: any) {
        console.log(key, value);
        localStorage?.setItem(key, value);
    }

    public async get(key: string) {
        return await localStorage?.getItem(key);
    }

    public async clear() {
        return await localStorage?.clear();
    }

    public async getAllKeys() {
        return await localStorage?.keys;
    }
}

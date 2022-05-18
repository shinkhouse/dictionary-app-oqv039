/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private _storage: Storage | null = null;
    constructor(private storage: Storage) {
        this.init();
    }

    // Create and expose methods that users of this service can
    // call, for example:
    async init() {
        const storage = await this.storage.create();
        this._storage = storage;
    }
    public set(key: string, value: any) {
        console.log(key, value);
        this._storage?.set(key, value);
    }

    public async get(key: string) {
        return await this.storage.get(key);
    }

    public async clear() {
        return await this.storage.clear();
    }
    public async getAllKeys() {
        return await this.storage.keys();
    }
}

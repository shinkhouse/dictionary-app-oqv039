import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './core/services/storage.service';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
    public appPages = [
        { title: 'Home', url: '/home', icon: 'home' },
        { title: 'Settings', url: '/settings', icon: 'settings' },
    ];
    constructor(private storage: StorageService, private router: Router) {
        // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
            return false;
        };
    }

    async ngOnInit() {
        this.storage.get('savedWords').then((res) => {
            if (res === undefined || res === null) {
                this.storage.set('savedWords', JSON.stringify([]));
            }
        });
        this.storage.get('recentWords').then((res) => {
            if (res === undefined || res === null) {
                this.storage.set('recentWords', JSON.stringify([]));
            }
        });
    }

    navigateToPage(page) {
        this.router.navigate([`/${page}`]);
    }
}

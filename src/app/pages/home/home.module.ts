import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchBarModule } from '../../core/components/search-bar/search-bar.module';
import { SwiperModule } from 'swiper/angular';
import { StorageService } from '../../core/services/storage.service';
import { WordCardModule } from 'src/app/core/components/word-card/word-card.module';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FolderPageRoutingModule,
        FlexLayoutModule,
        SearchBarModule,
        SwiperModule,
        WordCardModule,
        RouterModule
    ],
    declarations: [HomePage],
    providers: [StorageService],
})
export class HomePageModule {}

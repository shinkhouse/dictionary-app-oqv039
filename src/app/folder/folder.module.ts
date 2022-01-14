import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchBarModule } from '../core/components/search-bar/search-bar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    FlexLayoutModule,
    SearchBarModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}

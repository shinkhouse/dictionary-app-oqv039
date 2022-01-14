import {NgModule} from '@angular/core';
import {SearchBarComponent} from './components/index/search-bar.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    SearchBarComponent,
  ],
  exports: [
    SearchBarComponent,
  ],
})
export class SearchBarModule {}

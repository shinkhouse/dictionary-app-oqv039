import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCardComponent } from './word-card.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [WordCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ], exports: [WordCardComponent]
})
export class WordCardModule { }

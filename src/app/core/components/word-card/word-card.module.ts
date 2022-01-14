import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCardComponent } from './word-card.component';



@NgModule({
  declarations: [WordCardComponent],
  imports: [
    CommonModule
  ], exports: [WordCardComponent]
})
export class WordCardModule { }

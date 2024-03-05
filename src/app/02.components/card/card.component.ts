import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IArticle } from '../../04.interface/iarticle';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input() article!: IArticle;
  @Output() addToCardClik = new EventEmitter<IArticle>();

  addToCard() {
    this.addToCardClik.emit(this.article);
  }
}

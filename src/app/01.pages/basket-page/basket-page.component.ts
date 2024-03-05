import { Component, OnInit } from '@angular/core';
import { IArticle } from '../../04.interface/iarticle';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-basket-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './basket-page.component.html'
})
export class BasketPageComponent implements OnInit {

  public basket : IArticle[] = [];

  ngOnInit(): void {
    this.loadBasket();
  }
  
  loadBasket() {
    const panier = localStorage.getItem("panier");
    if (panier) {
      this.basket = JSON.parse(panier);
      console.log(this.basket);
      
    }
  }
}

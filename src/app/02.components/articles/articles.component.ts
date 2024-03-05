import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../03.services/api.service';
import { CardComponent } from '../card/card.component';
import { IArticle } from '../../04.interface/iarticle';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './articles.component.html'
})
export class ArticlesComponent implements OnInit, OnDestroy {

  constructor(private servicesService: ApiService) { }

  public articles: IArticle[] = [];
  public basket: IArticle[] = [];

  ngOnInit(): void {
    this.loadArticles();

    const stockedBasket = localStorage.getItem("panier");
    if (stockedBasket) {
      const parsedBasket = JSON.parse(stockedBasket)

      parsedBasket.map((el: IArticle) => {
        this.basket.push(el)
      })
    }
  }

  loadArticles() {
    this.servicesService.getArticles().subscribe(
      {
        next: (data) => {
          this.articles = data;

        },
        error: (err) => {
          console.error("Erreur lors du chargement des articles :", err);
        }
      }
    )
  }
  ngOnDestroy(): void {

  }

  addToCard(article: IArticle) {
    console.log("Ajouté : ", article);
    this.basket.push(article);
    localStorage.setItem("panier", JSON.stringify(this.basket))
  }
}

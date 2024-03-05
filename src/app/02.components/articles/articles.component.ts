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

  ngOnInit(): void {
    this.loadArticles();
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
    
  }
}

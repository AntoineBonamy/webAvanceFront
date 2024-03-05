import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../03.services/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [NgFor],
  templateUrl: './articles.component.html'
})
export class ArticlesComponent implements OnInit {

  constructor(private servicesService: ApiService) { }

  public articles: any[] = [];

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles() {
    this.servicesService.getArticles().subscribe(
      {next: (data) => {
        this.articles = data;
        console.log(this.articles);
        
      },
      error: (err) => {
        console.error("Erreur lors du chargement des articles :", err);
      }}
    )
  }
}

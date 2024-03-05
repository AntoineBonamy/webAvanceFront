import { Component } from '@angular/core';
import { ArticlesComponent } from '../../02.components/articles/articles.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticlesComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

}

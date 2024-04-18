import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-app-home',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor(private gifsService :GifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }

}

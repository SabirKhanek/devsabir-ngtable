import { Component } from '@angular/core';
import { TableDataHeader } from '@devsabir/ngtable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tableHeaderDefinition: TableDataHeader[] = [
    { columnId: 'movie_title', columnAlias: 'Title', colspan: '50%' },
    { columnId: 'movie_ratings', columnAlias: 'Ratings' },
    { columnId: 'delete', columnAlias: 'Delete', colspan: '80px' }
  ]

  tableData: Movie[] = MOVIE_DATA
}

interface Movie {
  movie_title: string;
  movie_ratings: number;
}


const MOVIE_DATA: Movie[] = [
  { movie_title: "The Shawshank Redemption", movie_ratings: 9.3 },
  { movie_title: "The Godfather", movie_ratings: 9.2 },
  { movie_title: "The Dark Knight", movie_ratings: 9.0 },
  { movie_title: "Pulp Fiction", movie_ratings: 8.9 },
  { movie_title: "Schindler's List", movie_ratings: 8.9 },
  { movie_title: "Forrest Gump", movie_ratings: 8.8 },
  { movie_title: "The Lord of the Rings: The Return of the King", movie_ratings: 8.9 },
  { movie_title: "Inception", movie_ratings: 8.8 },
  { movie_title: "The Matrix", movie_ratings: 8.7 },
  { movie_title: "Fight Club", movie_ratings: 8.8 },
  { movie_title: "The Silence of the Lambs", movie_ratings: 8.6 },
  { movie_title: "Star Wars: Episode V - The Empire Strikes Back", movie_ratings: 8.7 },
  { movie_title: "The Green Mile", movie_ratings: 8.6 },
  { movie_title: "The Godfather: Part II", movie_ratings: 9.0 },
  { movie_title: "Goodfellas", movie_ratings: 8.7 }
];

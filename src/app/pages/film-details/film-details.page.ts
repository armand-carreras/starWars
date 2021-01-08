import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {
  apiKey:string='1a984abbb3a51e2f2d0eff4c4ce3ad4c';
  filmId:string = '';
  // movieUrl:string = `https://api.themoviedb.org/3/movie/${this.filmId}?api_key=${this.apiKey}&language=es-ES`
  topRatedUrl:string='';
  movie:any ;
  constructor(private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient) {
  }
  ngOnInit() {
    // this.filmId='';
    this.activatedRoute.params.subscribe(
      (params: Params) =>{ this.filmId = params.id, console.log('params',this.filmId)});
    this.httpClient.get(`https://api.themoviedb.org/3/movie/${this.filmId}?api_key=${this.apiKey}&language=es-ES`).subscribe( param => {
      this.movie = param;
      console.log(this.movie);
    })
    // this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

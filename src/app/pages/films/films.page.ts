import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  queryObject:any;
  page:string = '1';
  query:string;
  apiKey:string='1a984abbb3a51e2f2d0eff4c4ce3ad4c';
  searchUrl:string=`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=es-ES&query=`;

  constructor(private navController: NavController,
              private router: Router,
              private httpClient: HttpClient) { }

  ngOnInit() {
  }
  onSearchClick($event){
    this.page = '1';
    console.log('event', $event);
    console.log('event value', $event.detail.value)
    this.httpClient.get(this.searchUrl+$event.detail.value+`&page=${this.page}`).subscribe(resp => {
      this.queryObject = resp;
      console.log(resp)
    })
  }


  onSearchPageLess(){
    let sum;
    sum=parseInt(this.page);
    console.log('sum=page ', sum);
    if(sum > 1){
      sum--;
      this.page = sum.toString();
    }
    this.httpClient.get(this.searchUrl+this.query+`&page=${this.page}`).subscribe(param => {
      this.queryObject = param;
      console.log(param);
    })
  }

  onSearchPagePlus(){
    let sum;
    sum=parseInt(this.page);
    console.log('sum=page ', sum);
    if(sum >= 1 && sum < 1000){
      sum++;
      this.page = sum.toString();
    }

    console.log('page ', this.page);
    this.httpClient.get(this.searchUrl+this.query+`&page=${this.page}`).subscribe(param => {
      this.queryObject = param;
      console.log(param);
    })
  }

  openDetails(itemId){
    this.router.navigateByUrl(`/tabs/films/${itemId}`)
  }
  goToPlanets() {
    this.navController.navigateRoot(`/tabs/planets`)
  }
}

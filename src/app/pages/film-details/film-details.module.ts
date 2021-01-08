import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from "@angular/common/http";
import { FilmDetailsPageRoutingModule } from './film-details-routing.module';

import { FilmDetailsPage } from './film-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    FilmDetailsPageRoutingModule
  ],
  declarations: [FilmDetailsPage]
})
export class FilmDetailsPageModule {}

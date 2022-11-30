import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { DishesComponent } from './components/dishes/dishes.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

const routes:Routes=[
  {path:'', component:RestaurantsComponent},
  {path:'dishes', component:DishesComponent},
  {path:'restaurant/:id/dishes', component:DishesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RestaurantsComponent,
    DishesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

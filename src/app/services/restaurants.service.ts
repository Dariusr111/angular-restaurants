import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Restaurant} from "../models/restaurant";

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private readonly url='http://localhost:8000/api/';
  constructor(private http:HttpClient) {

  }
  public getRestaurants() {
    return this.http.get<Restaurant[]>(this.url+'restaurants');
  }
}

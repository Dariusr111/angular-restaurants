import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Restaurant} from "../models/restaurant";
import {Dish} from "../models/dish";

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  private readonly url='http://localhost:8000/api/';
  constructor(private http:HttpClient) {

  }
  public getDishes() {
    return this.http.get<Dish[]>(this.url+'dishes');
  }
}

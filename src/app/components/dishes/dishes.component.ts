import { Component, OnInit } from '@angular/core';
import {Dish} from "../../models/dish";
import {DishesService} from "../../services/dishes.service";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  public dishes:Dish[]=[];
  constructor(private dishService:DishesService) {
    this.dishService.getDishes().subscribe((response)=>{
      this.dishes=response;
    })
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../models/restaurant";
import {RestaurantsService} from "../../services/restaurants.service";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  public restaurants:Restaurant[]=[];
  constructor(private restaurantService:RestaurantsService) {
    this.restaurantService.getRestaurants().subscribe(
      (response)=>{
        this.restaurants=response;
      }
    )
  }

  ngOnInit(): void {
  }

}

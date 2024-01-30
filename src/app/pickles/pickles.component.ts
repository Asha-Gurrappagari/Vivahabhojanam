import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute,RouterModule, Route, Router } from '@angular/router';
import { FoodpageComponent } from '../foodpage/foodpage.component';
@Component({
  selector: 'app-pickles',
  templateUrl: './pickles.component.html',
  styleUrls: ['./pickles.component.css']
})
export class PicklesComponent implements OnInit{
  foods:Foods[]=[];
  
 constructor(private api:FoodService,activateRoute:ActivatedRoute,private router: Router){

  activateRoute.params.subscribe((params)=>{
    if(params.searchTerm)
    this.foods=this.api.getAllFoodBySearchTerm(params.searchTerm)
    else if(params.tag)
    this.foods=this.api.getAllFoodByTag(params.tag)
    else
    this.foods = this.api.getAll();
})
 }
 ngOnInit(): void{
 }
 
}

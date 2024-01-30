import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Spices } from '../shared/models/food';

@Component({
  selector: 'app-spices',
  templateUrl: './spices.component.html',
  styleUrls: ['./spices.component.css']
})
export class SpicesComponent implements OnInit{
spices:Spices[]=[];
constructor(activateRoute:ActivatedRoute,private api:FoodService){
  activateRoute.params.subscribe((params)=>{
    if(params.searchSpice)
    this.spices=this.api.getAllSpicesBySearchSpice(params.searchSpice)
    else
    this.spices=this.api.getAllSpices();
  })
}
  ngOnInit(): void {
    
  }
}

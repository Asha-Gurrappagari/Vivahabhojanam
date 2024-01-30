import { Component, OnInit } from '@angular/core';
import { Powders } from '../shared/models/food';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-powders',
  templateUrl: './powders.component.html',
  styleUrls: ['./powders.component.css']
})
export class PowdersComponent implements OnInit{
  powders:Powders[]=[];
  constructor(private api:FoodService,activateRoute:ActivatedRoute){
    activateRoute.params.subscribe((params)=>{
      if(params.searchPowder)
      this.powders=this.api.getAllPowderBySearchPowder(params.searchPowder)
    else
    this.powders=this.api.getAllPowders();
    })
  }
ngOnInit(): void{
 }
}

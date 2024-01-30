import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Dals } from '../shared/models/food';

@Component({
  selector: 'app-dals',
  templateUrl: './dals.component.html',
  styleUrls: ['./dals.component.css']
})
export class DalsComponent implements OnInit{
  dals:Dals[]=[];
  constructor(activateRoute:ActivatedRoute,private api:FoodService){
    activateRoute.params.subscribe((params)=>{
      if(params.searchDal)
      this.dals=this.api.getAllDalsBySearchDal(params.searchDal)
      else
      this.dals=this.api.getAllDals();
    })
  }
  ngOnInit(): void {
    
  }

}

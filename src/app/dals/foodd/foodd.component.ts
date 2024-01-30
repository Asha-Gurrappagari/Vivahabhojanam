import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Dals } from 'src/app/shared/models/food';

@Component({
  selector: 'app-foodd',
  templateUrl: './foodd.component.html',
  styleUrls: ['./foodd.component.css']
})
export class FooddComponent implements OnInit{
  dals!:Dals;
  constructor(private activatedRoute:ActivatedRoute,foodService:FoodService,private cartService:CartService, private router: Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.dals = foodService.getDalByid(params['id'])
    })
  }
  addToCartD(){
    this.cartService.addToCartD(this.dals);
    this.router.navigateByUrl('/cart-page');
  }
  ngOnInit(): void {
    
  }
}

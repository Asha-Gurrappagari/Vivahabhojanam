import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Spices } from 'src/app/shared/models/food';

@Component({
  selector: 'app-foodsp',
  templateUrl: './foodsp.component.html',
  styleUrls: ['./foodsp.component.css']
})
export class FoodspComponent implements OnInit{
  spices!: Spices;
  constructor(private activatedRoute:ActivatedRoute,foodService:FoodService,private cartService:CartService, private router: Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.spices = foodService.getSpiceByid(params['id'])
    })
  }
  addToCartS(){
    this.cartService.addToCartS(this.spices);
    this.router.navigateByUrl('/cart-page');
  }
ngOnInit(): void {
  
}
}

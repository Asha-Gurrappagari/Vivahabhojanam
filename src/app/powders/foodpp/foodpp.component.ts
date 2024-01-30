import { Component, Directive, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Powders } from 'src/app/shared/models/food';

@Component({
  selector: 'app-foodpp',
  templateUrl: './foodpp.component.html',
  styleUrls: ['./foodpp.component.css']
})
export class FoodppComponent implements OnInit{
  powder!:Powders;
  constructor(private activatedRoute:ActivatedRoute,private foodService:FoodService,private cartService:CartService, private router: Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.powder = foodService.getPowderByid(params['id'])
    })
  }
  addToCartP(){
    this.cartService.addToCartP(this.powder);
    this.router.navigateByUrl('/cart-page');
  }
   
  ngOnInit(): void {
    }
  }
  
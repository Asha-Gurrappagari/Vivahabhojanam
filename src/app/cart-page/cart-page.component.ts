import { Component, OnInit } from '@angular/core';
import { Cart} from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { CartItem, CartItemD, CartItemP, CartItemS } from '../shared/models/cartitem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cart!:Cart
  constructor(private cartService:CartService){
    // this.cartService.getCartObservable().subscribe((cart)=>{
    //   this.cart = cart;
    this.setCart();
    }
  
    ngOnInit(): void {
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart;
  }
  
  removeFromCartP(cartItemp:CartItemP){
    this.cartService.removeFromCartp(cartItemp.powder.id);
    this.setCart();
  }
  changeQuantityp(cartItemp:CartItemP,quantityInStringp:string){
    const quantityp=parseInt(quantityInStringp);
    this.cartService.changeQuantityp(cartItemp.powder.id,quantityp);
    this.setCart;
  }
  removeFromCartd(cartItemd:CartItemD){
    this.cartService.removeFromCartd(cartItemd.dals.id);
    this.setCart();
  }
  changeQuantityd(cartItemd:CartItemD,quantityInStringd:string){
    const quantityd=parseInt(quantityInStringd);
    this.cartService.changeQuantityd(cartItemd.dals.id,quantityd);
    this.setCart;
  }
  removeFromCarts(cartItems:CartItemS){
    this.cartService.removeFromCarts(cartItems.spices.id);
    this.setCart();
  }
  changeQuantitys(cartItems:CartItemS,quantityInStrings:string){
    const quantitys=parseInt(quantityInStrings);
    this.cartService.changeQuantitys(cartItems.spices.id,quantitys);
    this.setCart;
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  }
  


import { EventEmitter, Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Dals, Foods, Powders, Spices} from '../shared/models/food';
import { CartItem, CartItemD, CartItemP, CartItemS } from '../shared/models/cartitem';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  // private cartSubject:BehaviorSubject<Cart>=new BehaviorSubject(this.cart)
  // constructor(){}
  // cartData = new EventEmitter<CartItem[] | []>();
  addToCart(food:Foods) :void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id) 
    if(cartItem){
      this.changeQuantity(food.id , cartItem.quantity + 1)
      return;
    }
  //   else if(cartItem=this.cart.items.find(item => item.powder.id === powder.id)){
  //   this.changeQuantity(powder.id , cartItem.quantity + 1)
  // }
    this.cart.items.push(new CartItem(food));
  }
  addToCartP(powder:Powders) :void{
    let cartItemp = this.cart.item1.find(item => item.powder.id === powder.id) 
    if(cartItemp){
      this.changeQuantityp(powder.id , cartItemp.quantity+ 1)
      return;
    }
    this.cart.item1.push(new CartItemP(powder));
  }
  addToCartD(dals:Dals) :void{
    let cartItemd = this.cart.item2.find(item => item.dals.id === dals.id) 
    if(cartItemd){
      this.changeQuantityd(dals.id , cartItemd.quantity+ 1)
      return;
    }
    this.cart.item2.push(new CartItemD(dals));
  }
  addToCartS(spices:Spices) :void{
    let cartItems = this.cart.item3.find(item => item.spices.id === spices.id) 
    if(cartItems){
      this.changeQuantitys(spices.id , cartItems.quantity+ 1)
      return;
    }
    this.cart.item3.push(new CartItemS(spices));
  }
  removeFromCart(foodId:number):void{
    this.cart.items=this.cart.items.filter(item =>item.food.id != foodId)
  }
  changeQuantity(foodId:number,quantity:number){
    let cartItem=this.cart.items.find(item => item.food.id=== foodId);
    if(!cartItem)return;
    cartItem.quantity=quantity;
    // cartItem.price= quantity*cartItem.food.price;
    // this.cartData.emit(cartItem);
  }
  removeFromCartp(powderId:number):void{
    this.cart.item1=this.cart.item1.filter(item =>item.powder.id != powderId)
  }
  changeQuantityp(powderId:number,quantity:number){
    let cartItemp=this.cart.item1.find(item => item.powder.id=== powderId);
    if(!cartItemp)return;
    cartItemp.quantity=quantity;
  }
  changeQuantityd(dalsId:number,quantity:number){
    let cartItemd=this.cart.item2.find(item=>item.dals.id===dalsId);
    if(!cartItemd)return;
    cartItemd.quantity=quantity;
  }
  removeFromCartd(dalsId:number):void{
    this.cart.item2=this.cart.item2.filter(item =>item.dals.id != dalsId)
  }
  changeQuantitys(spicesId:number,quantity:number){
    let cartItems=this.cart.item3.find(item=>item.spices.id===spicesId);
    if(!cartItems)return;
    cartItems.quantity=quantity;
  }
  removeFromCarts(spicesId:number):void{
    this.cart.item3=this.cart.item3.filter(item =>item.spices.id != spicesId)
  }
  getCart():Cart{
    return this.cart;
  }
}

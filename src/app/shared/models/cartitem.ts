import { FoodService } from "src/app/services/food/food.service";
import { Dals, Foods, Powders, Spices } from "./food";

export class CartItem{
    powder: any;
    constructor(food:Foods){
        this.food=food;
        this.price;
    }
    food:Foods;
    quantity:number=1;
    get price(): number{
        return this.food.price * this.quantity;
    }
}
export class CartItemP{
    powder: Powders;
    constructor(powder:Powders){
        this.powder=powder;
        this.price;
    }
    quantity:number=1
    get price():number{
        return this.powder.price*this.quantity;
    }
}
export class CartItemD{
    dals: Dals;
    constructor(dals:Dals){
        this.dals=dals;
        this.price;
    }
    quantity:number=1
    get price():number{

        return this.dals.price*this.quantity;
    }
}
export class CartItemS{
    spices: Spices;
    constructor(spices: Spices){
        this.spices=spices;
        this.price;
    }
    quantity:number=1
    get price():number{
        return this.spices.price*this.quantity;

    }
}
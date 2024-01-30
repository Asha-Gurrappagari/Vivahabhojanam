import { CartItem, CartItemD, CartItemS } from "./cartitem";
import { CartItemP } from "./cartitem";
export class Cart{
    items: CartItem[] = [];
    item1: CartItemP[]=[];
    item2: CartItemD[]=[];
    item3: CartItemS[]=[];
count: any;
    get totalPrice():number{
        let totalPrice = 0;
        let count = 0;
        this.items.forEach(item=>{
            totalPrice += item.price;
            count=count+1;
        });
        this.item1.forEach(item=>{
            totalPrice += item.price;
            count=count+1;
        })
        this.item2.forEach(item=>{
            totalPrice += item.price;
            count=count+1;
        })
        this.item3.forEach(item=>{
            totalPrice += item.price;
            count=count+1;
        })
        return totalPrice;
    }
    get totalQuantity():number{
        let count=0;
        this.items.forEach(item=>{
            count+=item.quantity
        });
        this.item1.forEach(item=>{
            count+=item.quantity
        })
        this.item2.forEach(item=>{
            count+=item.quantity
        })
        this.item3.forEach(item=>{
            count+=item.quantity
        })
        return count;
    }
}
// export class CartP{
//     items: CartItemP[]=[];
//       get totalpprice():number{
//         let totalpprice = 0;
//         this.items.forEach(item=>{
//             totalpprice += item.price;
//         });
//         return totalpprice;
//     }
// }

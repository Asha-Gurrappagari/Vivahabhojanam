import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Dals, Foods, Powders, Spices } from 'src/app/shared/models/food';
import { allDals, allPickles, allPowders, allSpices, sample_tags } from 'src/data';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }
  getPowderByid(id:number): Powders{
    return this.getAllPowders().find(powder => powder.id==id)!;
  }
  getDalByid(id:number): Dals{
    return this.getAllDals().find(dals => dals.id==id)!;
  }
  getSpiceByid(id:number): Spices{
    return this.getAllSpices().find(Spices => Spices.id==id)!;
  }
  getAll():Foods[]{
    return allPickles
  }
  getAllPowders():Powders[]{
    return allPowders
  }
  getAllDals():Dals[]{
    return allDals
  }
  getAllSpices():Spices[]{
    return allSpices
  }
  //  return [
  //       {id:1, name:'Chicken Pickle', description: 'Freshly made Chicken pickle with home-made spices.',imageUrl:'assets/img/chicken pickle.webp',favorite: true, price : 550,star:4.0},
  //       {id:2, name:'Mutton Pickle', description: 'Freshly made Mutton pickle with home-made spices.',imageUrl:'../../assets/img/muttonpickle.webp',favorite: false,price : 700,star:4.0},
  //       {id:3, name:'Prawns Pickle', description: 'Freshly made Prawns pickle with home-made spices.',imageUrl:'../../assets/img/prawnpickle.webp',favorite: false,price : 1000,star:4.0},
  //       {id:4, name:'Mango Pickle', description: 'Freshly made Mango pickle with home-made spices.',imageUrl:'../../assets/img/mangopickle.webp',favorite: false,price : 500,star:4.0},
  //       {id:5, name:'Gongura Pickle', description: 'Freshly made Gongura pickle with home-made spices.',imageUrl:'../../assets/img/gongurapickle.jpg',favorite: false,price : 500,star:4.0},
  //       {id:6, name:'Drumstick Pickle', description: 'Freshly made Drumstick pickle with home-made spices.',imageUrl:'../../assets/img/DrumstickPickle.jpg',favorite: false,price : 500,star:4.0},
  //       {id:7, name:'Lemon Pickle', description: 'Freshly made Lemon pickle with home-made spices.',imageUrl:'../../assets/img/lemonpickle.jpg',favorite: false,price : 500,star:4.0},
  //       {id:8, name:'Red Chilli Pickle', description: 'Freshly made Red-Chilli pickle with home-made spices.',imageUrl:'../../assets/img/redchillipickle.webp',favorite: false,price : 500,star:4.0},
  //       {id:9, name:'Tomato Pickle', description: 'Freshly made Tomato pickle with home-made spices.',imageUrl:'../../assets/img/tomatopickle.jpg',favorite: false,price : 500,star:4.0}
  //     ]
  
//   getNonVeg():NonvegPickles[]{
//     return[
//     {'id':1, name:'Chicken Pickle', description: 'Freshly made Chicken pickle with home-made spices.',imageUrl:'assets/img/chicken pickle.webp',favorite: false, price : 550,star:4.0},
//     {'id':2, name:'Mutton Pickle', description: 'Freshly made Mutton pickle with home-made spices.',imageUrl:'../../assets/img/muttonpickle.webp',favorite: false, price : 550,star:4.0},
//     {'id':3, name:'Prawns Pickle', description: 'Freshly made Prawns pickle with home-made spices.',imageUrl:'../../assets/img/prawnpickle.webp',favorite: false, price : 550,star:4.0}
//   ]
// }
// getVeg():VegPickles[]{
//   return[
//     {id:1, name:'Mango Pickle', description: 'Freshly made Mango pickle with home-made spices.',imageUrl:'../../assets/img/mangopickle.webp',favorite: false,price : 500,star:4.0},
//     {id:2, name:'Gongura Pickle', description: 'Freshly made Gongura pickle with home-made spices.',imageUrl:'../../assets/img/gongurapickle.jpg',favorite: false,price : 500,star:4.0},
//     {id:3, name:'Drumstick Pickle', description: 'Freshly made Drumstick pickle with home-made spices.',imageUrl:'../../assets/img/DrumstickPickle.jpg',favorite: false,price : 500,star:4.0},
//     {id:4, name:'Lemon Pickle', description: 'Freshly made Lemon pickle with home-made spices.',imageUrl:'../../assets/img/lemonpickle.jpg',favorite: false,price : 500,star:4.0},
//     {id:5, name:'Red Chilli Pickle', description: 'Freshly made Red-Chilli pickle with home-made spices.',imageUrl:'../../assets/img/redchillipickle.webp',favorite: false,price : 500,star:4.0},
//     {id:6, name:'Tomato Pickle', description: 'Freshly made Tomato pickle with home-made spices.',imageUrl:'../../assets/img/tomatopickle.jpg',favorite: false,price : 500,star:4.0}
//   ]
// }
getAllFoodBySearchTerm(searchTerm:string){
  return this.getAll().filter(foods=>foods.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
getAllPowderBySearchPowder(searchPowder:string){
  return this.getAllPowders().filter(Powders=>Powders.name.toLowerCase().includes(searchPowder.toLowerCase()))
  }
getAllDalsBySearchDal(searchDal:string){
  return this.getAllDals().filter(Dals=>Dals.name.toLowerCase().includes(searchDal.toLowerCase()))
}
getAllSpicesBySearchSpice(searchSpice:string){
  return this.getAllSpices().filter(Spices=>Spices.name.toLowerCase().includes(searchSpice.toLowerCase()))
}
getAllTags():Tag[]{
  return sample_tags
}
getAllFoodByTag(tag:string):Foods[]{
  return tag==="All"? this.getAll():this.getAll().filter(foods=>foods.tags?.includes(tag));
}
// getPowderName(powderName:string){
//   return this.getAllPowders().find(powder => powder.name==powderName)!;
// }
}

import { Tag } from "./app/shared/models/Tag";
import { Dals, Foods, Spices } from "./app/shared/models/food";
import { Powders } from "./app/shared/models/food";
export const allPickles :Foods[]=[
    {id:1, name:'Chicken Pickle', description: 'Freshly made Chicken pickle with home-made spices.',imageUrl:'assets/img/chicken pickle.webp',favorite: true, price : 550,star:4.0,tags:['NonVeg','All']},
    {id:2, name:'Mutton Pickle', description: 'Freshly made Mutton pickle with home-made spices.',imageUrl:'assets/img/muttonpickle.webp',favorite: true,price : 700,star:4.0,tags:['NonVeg','All']},
    {id:3, name:'Prawns Pickle', description: 'Freshly made Prawns pickle with home-made spices.',imageUrl:'assets/img/prawnpickle.webp',favorite: true,price : 1000,star:4.0,tags:['NonVeg','All']},
    {id:4, name:'Mango Pickle', description: 'Freshly made Mango pickle with home-made spices.',imageUrl:'assets/img/mangopickle.webp',favorite: true,price : 500,star:4.0,tags:['Veg','All']},
    {id:5, name:'Gongura Pickle', description: 'Freshly made Gongura pickle with home-made spices.',imageUrl:'assets/img/gongurapickle.jpg',favorite: false,price : 500,star:4.0,tags:['Veg','All']},
    {id:6, name:'Drumstick Pickle', description: 'Freshly made Drumstick pickle with home-made spices.',imageUrl:'assets/img/DrumstickPickle.jpg',favorite: false,price : 500,star:4.0,tags:['Veg','All']},
    {id:7, name:'Lemon Pickle', description: 'Freshly made Lemon pickle with home-made spices.',imageUrl:'assets/img/lemonpickle.jpg',favorite: false,price : 500,star:4.0,tags:['Veg','All']},
    {id:8, name:'Red Chilli Pickle', description: 'Freshly made Red-Chilli pickle with home-made spices.',imageUrl:'assets/img/redchillipickle.webp',favorite: false,price : 500,star:4.0,tags:['Veg','All']},
    {id:9, name:'Tomato Pickle', description: 'Freshly made Tomato pickle with home-made spices.',imageUrl:'assets/img/tomatopickle.jpg',favorite: false,price : 500,star:4.0,tags:['Veg','All']}
    // {id:10, name:'Gun Powder', description: 'Freshly made Mango pickle with home-made spices.',imageUrl:'../../assets/img/GunPowder.webp',favorite: false,price : 500,star:4.0,tags:['Veg','All']},
    // {id:11, name:'Peanut Powder', description: 'Freshly made Gongura pickle with home-made spices.',imageUrl:'../../assets/img/peanutpowder.jpeg',favorite: false,price : 500,star:4.0,tags:['Veg','All']},
    // {id:12, name:'Roasted ChannaDal Powder', description: 'Freshly made Drumstick pickle with home-made spices.',imageUrl:'../../assets/img/RoastedCDPowder.JPG',favorite: false,price : 500,star:4.0,tags:['Veg','All']},
    // {id:13, name:'Idli Karam', description: 'Freshly made Lemon pickle with home-made spices.',imageUrl:'../../assets/img/IdliKaram.jpg',favorite: false,price : 500,star:4.0,tags:['Veg','All']},
    // {id:14, name:'Sesame Powder', description: 'Freshly made Red-Chilli pickle with home-made spices.',imageUrl:'../../assets/img/sesamepowder.jpg',favorite: false,price : 500,star:4.0,tags:['Veg','All']},
    // {id:15, name:'Horse Gram Powder', description: 'Freshly made Tomato pickle with home-made spices.',imageUrl:'../../assets/img/Horsegrampowder.webp',favorite: false,price : 500,star:4.0,tags:['Veg','All']}

]
export const allPowders :Powders[]=[
    {id:1, name:'Gun Powder', description: 'Freshly made Mango pickle with home-made spices.',imageUrl:'assets/img/GunPowder.webp',favorite: false,price : 500,star:4.0},
    {id:2, name:'Peanut Powder', description: 'Freshly made Gongura pickle with home-made spices.',imageUrl:'assets/img/peanutpowder.jpeg',favorite: false,price : 500,star:4.0},
    {id:3, name:'Roasted ChannaDal Powder', description: 'Freshly made Drumstick pickle with home-made spices.',imageUrl:'assets/img/RoastedCDPowder.JPG',favorite: false,price : 500,star:4.0},
    {id:4, name:'Idli Karam', description: 'Freshly made Lemon pickle with home-made spices.',imageUrl:'assets/img/IdliKaram.jpg',favorite: false,price : 500,star:4.0},
    {id:5, name:'Sesame Powder', description: 'Freshly made Red-Chilli pickle with home-made spices.',imageUrl:'assets/img/sesamepowder.jpg',favorite: false,price : 500,star:4.0},
    {id:6, name:'Horse Gram Powder', description: 'Freshly made Tomato pickle with home-made spices.',imageUrl:'assets/img/Horsegrampowder.webp',favorite: false,price : 500,star:4.0}
]
export const allDals :Dals[]=[
    {id:1, name:'Bengal Gram', description: 'Freshly made Mango pickle with home-made spices.',imageUrl:'assets/img/BengalGram.webp',favorite: false,price : 500,star:4.0},
    {id:2, name:'Black Gram', description: 'Freshly made Gongura pickle with home-made spices.',imageUrl:'assets/img/blackgram.jpg',favorite: false,price : 500,star:4.0},
    {id:3, name:'Moong Dal', description: 'Freshly made Drumstick pickle with home-made spices.',imageUrl:'assets/img/moongdal.webp',favorite: false,price : 500,star:4.0},
    {id:4, name:'Red Gram', description: 'Freshly made Lemon pickle with home-made spices.',imageUrl:'assets/img/redgram.jpeg',favorite: false,price : 500,star:4.0},
    {id:5, name:'Toor Dal', description: 'Freshly made Red-Chilli pickle with home-made spices.',imageUrl:'assets/img/toordal.jpg',favorite: false,price : 500,star:4.0},
    {id:6, name:'Green Gram', description: 'Freshly made Tomato pickle with home-made spices.',imageUrl:'assets/img/greengram.webp',favorite: false,price : 500,star:4.0}
]
export const allSpices :Spices[]=[
    {id:1, name:'Turmeric Powder', description: 'Freshly made Chicken pickle with home-made spices.',imageUrl:'assets/img/Tumeric.jpeg',favorite: false, price : 550,star:4.0},
    {id:2, name:'Black Pepper Powder', description: 'Freshly made Mutton pickle with home-made spices.',imageUrl:'assets/img/blackpepper.webp',favorite: false,price : 700,star:4.0},
    {id:3, name:'Fenugreek Powder', description: 'Freshly made Prawns pickle with home-made spices.',imageUrl:'assets/img/fenugreek.webp',favorite: false,price : 1000,star:4.0},
    {id:4, name:'Red Chilli Powder', description: 'Freshly made Mango pickle with home-made spices.',imageUrl:'assets/img/chilli.avif',favorite: false,price : 500,star:4.0},
    {id:5, name:'Dhaniya Powder', description: 'Freshly made Gongura pickle with home-made spices.',imageUrl:'assets/img/dhaniya.jpg',favorite: false,price : 500,star:4.0},
    {id:6, name:'White Pepper Powder', description: 'Freshly made Drumstick pickle with home-made spices.',imageUrl:'assets/img/whitepepper.jpg',favorite: false,price : 500,star:4.0},
    {id:7, name:'Jeera Powder', description: 'Freshly made Lemon pickle with home-made spices.',imageUrl:'assets/img/jeera.jpeg',favorite: false,price : 500,star:4.0},
    {id:8, name:'Garam Masala Powder', description: 'Freshly made Red-Chilli pickle with home-made spices.',imageUrl:'assets/img/garammasala.jpg',favorite: false,price : 500,star:4.0},
    {id:9, name:'Cinnamon Powder', description: 'Freshly made Tomato pickle with home-made spices.',imageUrl:'assets/img/cinnamon.jpeg',favorite: false,price : 500,star:4.0}
]
export const sample_tags:Tag[] = [
   {name:'All',count:9},
   {name:'NonVeg',count:3},
   {name:'Veg',count:6}
]
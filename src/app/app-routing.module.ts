import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './Menu/course.component';
import { AboutComponent } from './about/about.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { LoginComponent } from './login/login.component';
import { PicklesComponent } from './pickles/pickles.component';
import { DalsComponent } from './dals/dals.component';
import { PowdersComponent } from './powders/powders.component';
import { SpicesComponent } from './spices/spices.component';
import { TagComponent } from './tag/tag.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodppComponent } from './powders/foodpp/foodpp.component';
import { FooddComponent } from './dals/foodd/foodd.component';
import { FoodspComponent } from './spices/foodsp/foodsp.component';
import { CheckoutComponent } from './checkout/checkout.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path:'home',component:HomeComponent,
    children: [
      {path:'course',component:CourseComponent},
      {path:'login',component:LoginComponent},
      {path:'join',component:JoinnowComponent}

    ]
  },
  { path:'search/:searchTerm',component:PicklesComponent},
  { path:'searchp/:searchPowder',component:PowdersComponent},
  { path: 'searchd/:searchDal',component:DalsComponent},
  { path:'searchs/:searchSpice',component:SpicesComponent},
  { path:'tag/:tag',component:PicklesComponent},
  { path: 'food/:id',component:FoodpageComponent},
  { path: 'powder/:id',component:FoodppComponent},
  { path: 'dals/:id',component:FooddComponent},  
  { path: 'spices/:id',component:FoodspComponent},  
  { path:'pickle',component:PicklesComponent},
  {path:'dals',component:DalsComponent},
  {path:'powders',component:PowdersComponent},
  {path:'spices',component:SpicesComponent},
  { path:'course',component:CourseComponent},
  { path: 'cart-page',component:CartPageComponent},
  { path: 'checkout', component:CheckoutComponent},
  // {path:'pickle',component:PicklesComponent,
  // children:[
  //   { path: 'food/:id',component:FoodpageComponent},

  // ]},

  {
    path:'about',component:AboutComponent
  },
  {
    path:'join',component:JoinnowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

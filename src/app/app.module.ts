import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './Menu/course.component';
import { AboutComponent } from './about/about.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { LoginComponent } from './login/login.component';
import { PowdersComponent } from './powders/powders.component';
import { DalsComponent } from './dals/dals.component';
import { SpicesComponent } from './spices/spices.component';
import { PicklesComponent } from './pickles/pickles.component';
import { SearchComponent } from './pickles/search/search.component';
import { TagComponent } from './tag/tag.component';
import { SearchpComponent } from './powders/searchp/searchp.component';
import { SearchdComponent } from './dals/searchd/searchd.component';
import { SearchsComponent } from './spices/searchs/searchs.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FoodppComponent } from './powders/foodpp/foodpp.component';
import { FooddComponent } from './dals/foodd/foodd.component';
import { FoodspComponent } from './spices/foodsp/foodsp.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    AboutComponent,
    JoinnowComponent,
    LoginComponent,
    PowdersComponent,
    DalsComponent,
    SpicesComponent,
    PicklesComponent,
    SearchComponent,
    TagComponent,
    SearchpComponent,
    SearchdComponent,
    SearchsComponent,
    CartPageComponent,
    FoodpageComponent,
    NotFoundComponent,
    FoodppComponent,
    FooddComponent,
    FoodspComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

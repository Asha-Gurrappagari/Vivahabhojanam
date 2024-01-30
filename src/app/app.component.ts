import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CartItem } from './shared/models/cartitem';
import { CartService } from './services/cart.service';
import { Cart } from './shared/models/Cart';
// import { Housinglocation } from './housinglocation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  ngOnInit(): void {
  }
 

  title: any;
  
}


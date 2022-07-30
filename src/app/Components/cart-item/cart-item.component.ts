import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/Models/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem:CartItem={
    id: 0,
    name: "",
    price:0,
    url: "",
    description: "",
    amount:0
  };
  @Input() amount :number=0;
  constructor( 
  ) { }
  ngOnChanges(){  
    alert("tt");  
   //this.cartItems.map(m=>this.total=m.price*m.amount+this.total);
  }
  ngOnInit(): void {
   
  }

}

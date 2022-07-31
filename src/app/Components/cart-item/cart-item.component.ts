import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { CartItem } from 'src/app/Models/CartItem';
import { Item } from 'src/app/Models/Item';
import { ProdcutService } from 'src/app/Services/prodcut.service';

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
  @Output() totalEmit:EventEmitter<number>=new EventEmitter;
  total:number=0;
  constructor( private productService :ProdcutService) { }
 ngOnChanges(){  
   //this.cartItems.map(m=>this.total=m.price*m.amount+this.total);
   //alert(this.total);
  }
  ngOnInit(): void {
   
  }
  removeFromCart(item:Item){
    this.productService. removeItem(item);
    this.productService.cartItems.map(m=>this.total=m.price*m.amount+this.total);
    this.sendTotal(this.total);
    alert("your Item is removed");
  }
  amountChanged(item:Item,amount:number){
    this.productService.amountChanged(item,amount);
    this.productService.cartItems.map(m=>this.total=m.price*m.amount+this.total);
    this.sendTotal(this.total);
  }
sendTotal(total:number){
  this.totalEmit.emit(total);
}
}

import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/Models/CartItem';
import { ProdcutService } from 'src/app/Services/prodcut.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  @Input() cartItems :CartItem[]=[];
@Input() total:number=0;
  constructor(private productService :ProdcutService,private r:Router) { }
  ngOnChanges(){  
   
    this.cartItems.map(m=>this.total=m.price*m.amount+this.total);
  }
  ngOnInit(): void {
    this.cartItems=this.productService.cartItems;
    this.cartItems.map(m=>this.total=m.price*m.amount+this.total);

  }
  clear(){
    alert("you have been checcked out");
    this.productService.clearCart();
    this.r.navigateByUrl('/sucess');

  }
  

}



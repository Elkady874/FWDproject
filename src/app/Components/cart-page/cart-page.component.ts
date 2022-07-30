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
   cartItems :CartItem[]=[];
   fullName:string;
   address:string;
   credit:string;
   total:number=0;

  constructor(private productService :ProdcutService,private r:Router) {
    this.fullName="";
    this.address="";
    this.credit="";
    this.cartItems=this.productService.cartItems;
   }
  
  ngOnInit(): void {
   
    this.cartItems.map(m=>this.total=m.price*m.amount+this.total);

  }
  newTotal(total:number){
    this.total=total;
  }
  clear(){
    alert("you have been checcked out");
    this.productService.clearCart();
    this.r.navigateByUrl('/sucess');

  }
  

}



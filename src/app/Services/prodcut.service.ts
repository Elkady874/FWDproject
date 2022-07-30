import { Injectable } from '@angular/core';
import { Item } from '../Models/Item';
import { CartItem } from '../Models/CartItem';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProdcutService {

  clickedItem:Item={};
  cartItems:CartItem[]=[];
  n:number[]=[];
  constructor(private http:HttpClient) { }
  getItems() : Observable<Item[]>{
  return this.http.get<Item[]>("./assets/data.json");

  }
  insertCart(item:Item,amount:number) {
   try{
let found=false;
let a =0;
  this.cartItems.forEach((value,index)=>{
    if(value.id==item.id){
      a=value.amount+amount ;
      this.cartItems.splice(index,1);
      found=true;
    }
  });
  if(!found){
    this.cartItems?.push(
      { id:this.clickedItem.id as number,
        name:this.clickedItem.name as string,
        description:this.clickedItem.description as string,
        price:this.clickedItem.price as number,
        url:this.clickedItem.url as string,
        amount:amount as number
        
      }
    );
  }else{
    this.cartItems?.push(
      { id:this.clickedItem.id as number,
        name:this.clickedItem.name as string,
        description:this.clickedItem.description as string,
        price:this.clickedItem.price as number,
        url:this.clickedItem.url as string,
        amount:a as number
        
      }
    );
  }

    alert("Added To your Cart");
   }catch(e){alert(e);}
  }
  clearCart(){
    this.cartItems =[];
  }
  setItem(item:Item){this.clickedItem=item;}
  getItem( ) : Item{return this.clickedItem as Item;}
  amountChanged(item:Item,amount:number) {
    try{
 let a =0;
 
   this.cartItems.forEach((value,index)=>{
     if(value.id==item.id){
       this.cartItems.splice(index,1);
     }
   });
   
     this.cartItems?.push(
       { id:item.id as number,
         name:item.name as string,
         description:item.description as string,
         price:item.price as number,
         url:item.url as string,
         amount:amount as number
         
       }
     );
 
    }catch(e){alert(e);}
   }
}

import {Component, Input, OnInit } from '@angular/core';
import {Item} from 'src/app/Models/Item';
import { ProdcutService } from 'src/app/Services/prodcut.service';
import {  Router, ROUTES, Routes } from '@angular/router';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
//@Input() item ?: Item;
// why can not nulliie
amount:string="1";
@Input() item :Item={
  id: 0,
  name: "",
  price:0,
  url: "",
  description: ""
}

  constructor(private productService :ProdcutService ,private r:Router) { }

  ngOnInit(): void {
    
  }
  set(ite:Item){
    
    this.productService.setItem(ite);
    this.r.navigateByUrl('/ItemDetails');
    
  }
  addCart(item:Item){
    try {
      this.productService.setItem(item); 
      this.productService.insertCart(item,parseFloat(this.amount));
         } catch (error) {
      alert(error);
    }
   }

}


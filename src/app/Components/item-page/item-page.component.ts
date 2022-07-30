import { Component, OnInit,Input } from '@angular/core';
import { Item } from 'src/app/Models/Item';
import { ProdcutService } from 'src/app/Services/prodcut.service';
@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  amount:string="1";
  @Input() item : Item={
    id: 0,
    name: "",
    price:0,
    url: "",
    description: ""}
  constructor(private productService :ProdcutService) { }

  ngOnInit(): void {
    //this.productService.getItems().subscribe(res=>this.item=res.find(e=>e.id==1) as Item);
    this.item=this.productService.getItem();
   }
   addCart(item:Item){
    try{
      this.productService.setItem(item);
    this.productService.insertCart(item,parseFloat(this.amount));
    }catch(e){console.log(e)}
   }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Item} from 'src/app/Models/Item';
import { ProdcutService } from 'src/app/Services/prodcut.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //items? :Observable<Item[]> ;
  items? :Item[];
   constructor( private productService :ProdcutService) { }

  ngOnInit(): void {
    this.productService.getItems().subscribe(res=>this.items=res);
  }

}

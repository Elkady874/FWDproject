import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPageComponent } from './Components/item-page/item-page.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { SucessMessageComponent } from './Components/sucess-message/sucess-message.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ItemComponent } from './Components/item/item.component';

const routes: Routes = [
  {
    path:'',
    component:ProductListComponent
  },
  {
    path:'sucess',
    component:SucessMessageComponent
  },
  {
    path:'ProductList',
    component:ProductListComponent
  }
  ,
  {
    path:'Cart',
    component:CartPageComponent
  },{
    path:'Item',
    component:ItemComponent
  },
  {
    path:'ItemDetails',
    component:ItemPageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

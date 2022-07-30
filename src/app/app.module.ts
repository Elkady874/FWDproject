import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ItemComponent } from './Components/item/item.component';
import { ItemPageComponent } from './Components/item-page/item-page.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { CartItemComponent } from './Components/cart-item/cart-item.component';
import { PersonalInfoComponent } from './Components/personal-info/personal-info.component';
import { SucessMessageComponent } from './Components/sucess-message/sucess-message.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    ItemPageComponent,
    CartPageComponent,
    CartItemComponent,
    PersonalInfoComponent,
    SucessMessageComponent,
    ProductListComponent
  ],
  imports: [HttpClientModule, 
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgbModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MyProduct } from './my-product.component';
import { ProductList } from './my-product-list.component';
import { ProductDetailComponent } from './my-product-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    MyProduct,
    ProductList,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

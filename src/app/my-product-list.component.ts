import { Component } from '@angular/core'
import { MyProduct } from './my-product.component';
import { ProductDetailComponent } from './my-product-detail.component';

@Component({
    selector: 'product-list',
    template: ` 
    
    <ul>
    <li *ngFor="let product of products" (click)="selectedProduct = product"> {{product.id}}: {{product.name}}
    </li>
    </ul>
   <product-detail [product] = "selectedProduct" (deleteProduct)="delete($event)"> </product-detail>
    
    `,
    styles: [`
    div {
      
      border:1px solid red;
      
    }
   `]
})
export class ProductList {

    
    p1= new MyProduct(1, "iPhone", 520, "the first smart phone");
    p2 = new MyProduct(2, "IPad", 120, "enjoy listing music");
    p3 = new MyProduct(5, "AppleTV", 520, "smart flat tv");

    products: MyProduct[] = [ this.p1, this.p2, this.p3];

    selectedProduct: MyProduct;
    delete(product: MyProduct) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i] == product) {
                this.products.splice(i, 1)
            }
        }
    }

}


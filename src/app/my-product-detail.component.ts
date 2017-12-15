import { Component, Input, Output,EventEmitter, style } from '@angular/core'
import { MyProduct } from './my-product.component';


@Component({
    selector: 'product-detail',
    template: `
    <span *ngIf="product">
    <input [(ngModel)]="product.name" ><input [(ngModel)]="product.price"><input [(ngModel)]="product.description" ></span>
    <button (click)="requestDelete()" id="btn">delete</button>`,
    styles:['#btn{color:red;}']
})
export class ProductDetailComponent {
    @Input()
    product: MyProduct
    @Output()
    deleteProduct = new EventEmitter<MyProduct>();
    requestDelete() {
        this.deleteProduct.emit(this.product);
    }
}
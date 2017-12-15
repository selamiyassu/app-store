import { Component } from '@angular/core'

@Component({
    selector: 'my-product',
    template: `Products`
})
export class MyProduct {
   

    constructor(public id: number,public name: string,public price: number,public description: string) {
      
    }

}
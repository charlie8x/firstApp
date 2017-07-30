// Custome Pipe for filtering productName column
// Must be imported and declared under app.module.ts declarations array
import { PipeTransform, Pipe } from '@angular/core';

import { IProduct } from '../products/product-interface';

// Pipe Decorator
@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], filterBy: string): IProduct[] {
        filterBy = filterBy ? filterBy.toLocaleUpperCase() : null;
        return filterBy ? value.filter((product: IProduct) =>
            product.productName.toLocaleUpperCase().indexOf(filterBy) !== -1) : value;
    }
}

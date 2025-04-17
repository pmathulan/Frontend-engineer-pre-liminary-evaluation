import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { AddToCartButtonComponent } from "../../../cart/components/add-to-cart-button/add-to-cart-button.component";

@Component({
  selector: 'app-product',
  imports: [AddToCartButtonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;

}

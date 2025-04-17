import { Component, inject, Input } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';
import { addItemAction } from '../../store/cart.actions';
import { Store } from '@ngrx/store';
import { Product } from '../../../product/models/product.model';

@Component({
  selector: 'app-add-to-cart-button',
  imports: [],
  templateUrl: './add-to-cart-button.component.html',
  styleUrl: './add-to-cart-button.component.scss'
})
export class AddToCartButtonComponent {
  @Input() product!: Product;
  private store = inject(Store);

  addToCart(): void {
    const item: CartItem = {
      ...this.product,
      quantity: 1
    };
    this.store.dispatch(addItemAction({ item }));
  }
}

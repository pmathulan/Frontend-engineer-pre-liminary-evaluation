import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { removeItemAction, updateQuantityAction } from '../../store/cart.actions';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CartItemComponent {
  private store = inject(Store);
  @Input() item!: CartItem;

  onRemove(id: string): void {
    this.store.dispatch(removeItemAction({ id }));
  }

  onQuantityChange(id: string, quantity: number): void {
    this.store.dispatch(updateQuantityAction({ id, quantity }));
  }


}
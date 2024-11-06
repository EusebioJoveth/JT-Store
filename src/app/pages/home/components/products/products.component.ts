import { Component } from '@angular/core';
import { PRODUCTS} from '../../../../data/products.data';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartService } from '../../../../services/cart.service';
import { Products } from '../../../../models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = PRODUCTS;

  constructor(private readonly cartService: CartService) {}

  onAdd(product: Products) {
    this.cartService.addItem({
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: 1,
    });
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TruncatePipe } from '../../../../pipes/truncate.pipe';
import { Products } from '../../../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [TruncatePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Products;
  @Output() add = new EventEmitter<Products>();

  onAdd() {
    this.add.next(this.product);
  }
}

import { Component, Input } from '@angular/core';
import { IProduct } from '../../model/iproduct';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css',
})
export class SingleProductComponent {
  @Input() productItem!: IProduct;
}

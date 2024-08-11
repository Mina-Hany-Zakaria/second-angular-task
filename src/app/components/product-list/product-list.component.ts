import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../model/iproduct';
import { SingleProductComponent } from '../single-product/single-product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [SingleProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  allProducts: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        console.log(data);
        this.allProducts = data;
      },

      error: (err) => {
        console.log(err);
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/Services/product.service';
import { IProduct } from '../product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;
  errorMessage!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack() {
    this.router.navigate(['/products']);
  }
}

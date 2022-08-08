import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from '../shared/Services/product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  private _listFilter: string = '';

  pageTitle: string = 'Product List';
  imgWidth: number = 50;
  imgMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  sub!: Subscription;

  constructor(private productService: ProductService) {}

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
    console.log('In setter: ', value);
  }
  get listFilter() {
    return this._listFilter;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => console.log(err),
    });
    this.filteredProducts = this.products;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  toggleimage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(value: string): IProduct[] {
    value = value.toLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLowerCase().includes(value)
    );
  }

  onRatingClicked(message: string): void {
    console.log(message);
  }
}

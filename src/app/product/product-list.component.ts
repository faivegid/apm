import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit{

    private _listFilter: string = "cart"

    pageTitle: string = "Product List";
    imgWidth: number = 50;
    imgMargin: number = 2;
    showImage: boolean = false;
    filteredProducts: IProduct[] = [];
    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
          },
          {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2021",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
          }
    ];

    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value);
        console.log("In setter: ", value);
    }
    get listFilter(){
        return this._listFilter;
    }

    ngOnInit(): void {
        this.listFilter = "cart";
    }

    toggleimage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(value: string): IProduct[]{  
        value = value.toLowerCase();      
         return this.products.filter((product: IProduct) =>
             product.productName.toLowerCase().includes(value))
    }
}
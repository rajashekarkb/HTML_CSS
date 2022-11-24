import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

 productsData: { id: number, name: any , price: any , imgurl: any }[] = [
    { 
      "id": 100,
      "name": "mobile",
      "price":"599",
      "imgurl": "../assets/image/product-1.png"
    },
    {
      "id": 101,
      "name": "laptop",
      "price":"599",
      "imgurl": 'assets/images/product-2.png'
    },
    { 
      "id": 102,
      "name": "desktop",
      "price":"599",
      "imgurl": 'assets/images/product-3.png'
    },
    { 
      "id": 103,
      "name": "television",
      "price":"599",
      "imgurl": 'assets/images/product-4.png'
    },
    { 
      "id": 104,
      "name": "desktop",
      "price":"599",
      "imgurl": 'assets/images/product-5.png'
    },
    { 
      "id": 105,
      "name": "television",
      "price":"599",
      "imgurl": 'assets/images/product-6.png'
    }
];
productDetails:any;
  constructor(public route:Router) { }

  ngOnInit(): void {
    this.productDetails = this.productsData;
    console.log(this.productDetails)
  }

  productInfo(id:any){

    this.route.navigate(
      ['details',
      id]
    );
  }
}

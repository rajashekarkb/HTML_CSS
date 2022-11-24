import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productsData: { id: number, name: any, price: any, imgurl: any }[] = [
    {
      "id": 100,
      "name": "mobile",
      "price": "599",
      "imgurl": "../assets/image/product-1.jpg"
    },
    {
      "id": 101,
      "name": "laptop",
      "price": "599",
      "imgurl": "../assets/images/product-2.jpg"
    },
    {
      "id": 102,
      "name": "desktop",
      "price": "599",
      "imgurl": "../assets/images/product-3.jpg"
    },
    {
      "id": 103,
      "name": "television",
      "price": "599",
      "imgurl": "../assets/images/product-4.jpg"
    },
    {
      "id": 104,
      "name": "desktop",
      "price": "599",
      "imgurl": "../assets/images/product-5.jpg"
    },
    {
      "id": 105,
      "name": "television",
      "price": "599",
      "imgurl": '../assets/images/product-6.jpg'
    }
  ];

  productId: any;
  prodname: any;
  prodprice: any;
  prodimgurl: any;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('proId');
    });
  }

  ngOnInit(): void {
    // var prodId = this.productId;
    this.productsData.forEach(element => {
      if (element.id == this.productId) {
        this.prodname = element.name;
        this.prodprice = element.price;
        this.prodimgurl = element.imgurl;
      }
    });
  }

}

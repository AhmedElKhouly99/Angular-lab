import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IProduct } from '../Shared Classes and types/iProduct'
import { ICategory } from '../Shared Classes and types/iCategory'
import { DiscountOffers } from '../Shared Classes and types/discountOffers';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductServiceService, private router:Router, private activatedRout:ActivatedRoute) { 
    this.discount = DiscountOffers.ten;
    this.storeName = "Lab1";
    this.storeLogo = "../../assets/logo.jpg";
    this.productList = [];
    // this.productList = productService.getAllProducts();
  //   [{
  //     iD:1,
  //     name : "Pro 1",
  //     quantity: 10,
  //     price: 6,
  //     img : "../../assets/Landscape-Color.jpg"
  //   },
  //   {
  //     iD:2,
  //     name : "Pro 2",
  //     quantity: 10,
  //     price: 6,
  //     img : "../../assets/Landscape-Color.jpg"
  //   }
  // ];
    this.categoryList = [{
      iD: 1,
      name: "Cat 1",
    },
    {
      iD: 2,
      name: "Cat 2",
    }
  ];
    this.clientName = "client 1";
    this.isPurshased = false;
  }

  ngOnInit(): void {
    this.productList = this.productService.getAllProducts();
  }

  discount: DiscountOffers ; 
  storeName: String;
  storeLogo: String;
  productList: Array<IProduct>;
  categoryList: Array<ICategory>;
  clientName: String;
  isPurshased: boolean;
  
  // @Output() childEvent = new EventEmitter().emit(this.renderValues);

  toggleBtn(){
    this.isPurshased = this.isPurshased? false: true;
  }

  renderValues(){
    this.productList = this.productService.getAllProducts();
    this.toggleBtn();
    // this.childEvent.emit(this.productList);
  }

  selectDiscount(){
    this.productService.discount = this.discount;
    this.router.navigate(['discount'], {relativeTo:this.activatedRout});
  }

}

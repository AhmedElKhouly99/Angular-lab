import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Shared Classes and types/iProduct'
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
  productList: Array<any>;
  discount:any;
  constructor(private productService: ProductServiceService) { 
    this.productList = this.productService.getAllProducts();
    this.discount  = productService.discount;
  }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import { IProduct } from '../Shared Classes and types/iProduct'
import { DiscountOffers } from '../Shared Classes and types/discountOffers';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  discount:any = 1.0;
  constructor() { }
  productList:IProduct[] = [{
    iD:1,
    name : "Pro 1",
    quantity: 10,
    price: 6,
    img : "../../assets/Landscape-Color.jpg"
  },
  {
    iD:2,
    name : "Pro 2",
    quantity: 10,
    price: 6,
    img : "../../assets/Landscape-Color.jpg"
  }
];

  getAllProducts(){
    return this.productList ?? null;
  }

  getProductById(prdId: any){
    return this.productList.find(p => p.iD === prdId) ?? null;
  }

  // getDiscountProducts(){
  //   return this.productList.map(p=> +p.price + "15%");
  // }

}

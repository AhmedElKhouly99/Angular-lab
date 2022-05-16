import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from '../app/products/products.component'
import { ProductServiceService } from './services/product-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab1';
  dataFromChild:string="";
  @ViewChild(ProductsComponent) child :ProductsComponent= new ProductsComponent(new ProductServiceService(),this.router, this.activatedRout);
  constructor(private router:Router, private activatedRout:ActivatedRoute){}
  viewProducts(){
    this.child.renderValues();
  }
}

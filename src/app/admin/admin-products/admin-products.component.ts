import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription, Observable } from 'rxjs';
import { AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$: Observable<any>
  constructor( public productService: ProductService) {
    this.products$ = this.productService.getAll();
    this.products$.subscribe(console.log);
  }
   
  ngOnInit() {
    
  }

}

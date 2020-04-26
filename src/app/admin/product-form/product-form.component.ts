import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$;
  constructor(private router: Router,
    private categoryService: CategoryService,
    private productService:ProductService ) { 
    this.categories$= this.categoryService.getCategories()
  }
  save(product){
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}

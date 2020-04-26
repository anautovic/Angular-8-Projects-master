import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }
  //products$: Observable<any>
  create(product){
    return this.db.list('/product').push(product);
  }
  getAll(){
    return this.db.list('/product').snapshotChanges().pipe(
      map((categories: any[]) => categories.map(prod => {
        const payload = prod.payload.val();
        const key = prod.key;
        return <any>{ key, ...payload };
      })),);

    
  }
}

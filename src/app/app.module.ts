import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from'@angular/router';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import {NgbModule} from'@ng-bootstrap/ng-bootstrap';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import{AuthService} from './auth.service'
import {AuthGuardService} from './auth-guard.service';
//import{canActivate} from 'angularfire2/firebase-node';
import { environment } from '../environments/environment';
import { from } from 'rxjs';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import {CustomFormsModule} from 'ng2-validation';
@NgModule({
  declarations: [
    
    AppComponent,
    BsNavbarComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    LoginComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent
  ],
  imports: [
    CustomFormsModule,
    AngularFireAuthModule,FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule, NgbModule.forRoot(),
    RouterModule.forRoot([{path:'', component:HomeComponent},
    {path:'products', component:ProductsComponent},
    {path:'check-out', component:CheckOutComponent, canActivate:[AuthGuardService]},
    {path:'my/orders', component:MyOrdersComponent, canActivate:[AuthGuardService]},
    {path:'order-success', component:OrderSuccessComponent, canActivate:[AuthGuardService]},
    {path:'shopping-cart', component:ShoppingCartComponent},
    {path:'login', component:LoginComponent},
    {path:'admin/products', component:AdminProductsComponent,
     canActivate:[AuthGuardService, AdminAuthGuardService]},
     {path:'admin/products/new', component:ProductFormComponent,
     canActivate:[AuthGuardService, AdminAuthGuardService]},
    {path:'admin/orders', component:AdminOrdersComponent,
     canActivate:[AuthGuardService, AdminAuthGuardService]},
]),
    
  ],
  providers: [AuthService,AuthGuardService,
     UserService, AdminAuthGuardService,
     ProductService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

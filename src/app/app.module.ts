import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        ProductsComponent,
        ShoppingCartComponent,
        CheckoutComponent,
        OrderSuccessComponent,
        AdminProductsComponent,
        AdminOrdersComponent,
        LoginComponent,
        MyOrdersComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([
            { path: "", component: HomeComponent },
            { path: "products", component: ProductsComponent },
            { path: "shopping-cart", component: ShoppingCartComponent },
            { path: "login", component: LoginComponent },

            { path: "checkout", component: CheckoutComponent, canActivate: [AuthGuard] },
            { path: "order-success", component: OrderSuccessComponent, canActivate: [AuthGuard] },
            { path: "my/orders", component: MyOrdersComponent, canActivate: [AuthGuard] },

            { path: "admin/products", component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
            { path: "admin/orders", component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard] }
        ])
    ],
    providers: [
        AuthService,
        AuthGuard,
        AdminAuthGuard,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

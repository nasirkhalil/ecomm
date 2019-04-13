import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "../components/main/main.component";
import {CartComponent} from "../components/cart/cart.component";
import {CheckoutComponent} from "../components/checkout/checkout.component";
import {ProductDetailsComponent} from "../components/product-details/product-details.component";
import {HomeComponent} from "../components/home/home.component";

const appRoutes: Routes = [
 	//{ path: '', component: HomeComponent },
 	{ path: '', component: MainComponent },
    { path: 'shop', component: MainComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'details', component: ProductDetailsComponent },
    // { path: 'register', component: RegisterComponent },
    // { path: 'forgot-password', component: ForgotPasswordComponent },
    // { path: 'reset-password/:token', component: ResetPasswordComponent },
    // { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
    // { path: '**', redirectTo: 'home' }
];
export const routing = RouterModule.forRoot(appRoutes);

import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { BuyProductComponent } from './buy-product/buy-product.component';

export const routes: Routes = [
    {path:'',component:ProductDetailesComponent},
    {path:'buyproduct',component:BuyProductComponent}
];

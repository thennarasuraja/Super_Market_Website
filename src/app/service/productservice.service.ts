import { Injectable } from '@angular/core';
import { Productinfo } from '../productinfo';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor() { }
  allproducts:Productinfo[]=[]

  addproducts(products:Productinfo[]){
    this.allproducts=products;
  }
  getproducts(){
    return this.allproducts;
  }
  
}

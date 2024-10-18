import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { Productinfo } from '../productinfo';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-product-detailes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-detailes.component.html',
  styleUrl: './product-detailes.component.css'
})
export class ProductDetailesComponent implements OnInit{
  product!:Productinfo
  Addproduct=false
  AllProducts:Productinfo[] = [
    { productname: 'Onion', productquantity: 1, section: 'Vegitable', price: 40 },
    { productname: 'Rice', productquantity: 1, section: 'Home', price: 65 },
    { productname: 'Curd', productquantity: 1, section: 'Home', price: 15 },
    { productname: 'Tomatto', productquantity: 1, section: 'Vegitable', price: 30 },
    { productname: 'Chocolate', productquantity: 1, section: 'Snacks', price: 10 },
  ]
  // AllProducts:Productinfo[] =[]
  editingIndex: number | null = null;
  constructor(private router:Router,private productservice:ProductserviceService){

  }
  ngOnInit(): void {
    this.productsharing()
  }
  // ngOnInit: void {
  //   this.Allproducts()
  // }
  // Allproducts(){
  //   this.productservice.add(this.AllProducts)
  // }

  
 
  Addproductfunc(){
    this.Addproduct=true
    this.product=new Productinfo()
    this.editingIndex=null
    console.log(this.editingIndex)
    console.log(this.product)
  }
  updateproduct(index:number){
    this.Addproduct=true
    this.product={...this.AllProducts[index]}
    this.editingIndex=index
    console.log( this.editingIndex)
  }
  editproduct(index:number){
    this.AllProducts.splice(index,1)

  }

  navigato(){
    this.router.navigate(['/buyproduct'])

  }
  SubmitProductDet(productform:NgForm){
    if(this.editingIndex!==null){
      this.AllProducts[this.editingIndex]={...productform.value}
      console.log(productform.value)
      this.editingIndex=null
    }
    else{
      this.AllProducts.push(productform.value)
      console.log(this.AllProducts)
    }
    console.log(productform)
    // productform.reset()
    this.Addproduct=false
    this.productsharing()
  }

  productsharing(){
    this.productservice.addproducts(this.AllProducts)

  }
  


}
// class ProductInfo{
//   // productid!:number
//   productname!:string
//   productquantity!:string
//   department!:string
//   price!:number
// }

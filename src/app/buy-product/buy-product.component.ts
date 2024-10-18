import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productinfo } from '../productinfo';
import { CommonModule } from '@angular/common';
import { ProductserviceService } from '../service/productservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buy-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './buy-product.component.html',
  styleUrl: './buy-product.component.css'
})
export class BuyProductComponent implements OnInit{
  constructor(private router:Router,private productservice:ProductserviceService){}
  AddRows:Productinfo[]=[]
  // AddRows:Productinfo[]=[]
  add:boolean=false
  buyproducts:Productinfo[]=[]
  product:Productinfo={
    productname:'',
    productquantity:0,
    section:'',
    price:0,
    total:0,
  }
  buytotal:number=0
  allproducts:Productinfo[]=[]
  showTotal:boolean=false

  ngOnInit(): void {
    this.getproductdata()
    
  }

  getproductdata(){
    this.allproducts=this.productservice.getproducts()
    console.log(this.allproducts)
  }
  Addrows(){
    this.add=true
    console.log(this.add)
    this.AddRows.push({...this.product})
    console.log(this.AddRows)

  }
  BuyProductsData(product:Productinfo){
    product.total = product.selectedProduct ? (product.productquantity * product.selectedProduct.price) : 0;
    this.buyproducts.push(product)
    console.log('Buyproducts:',this.buyproducts)
    this.add=false
    this.AddRows=[]

  }
  // CancelProductsData(product:Productinfo){
  
  // }
  Totalgenrate(){
    this.buytotal = this.buyproducts.reduce((acc, current) => {
      const currentTotal = current.total ?? 0; // Use nullish coalescing to handle undefined
      return acc + currentTotal; // Accumulate the total
    },0 );
    console.log("totalbuy:",this.buyproducts)
    console.log("totalbuy:",this.buytotal)
    this.showTotal=true

    
  }
  navigato(){
    this.router.navigate(['/'])

  }

}

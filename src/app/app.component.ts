import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { BuyProductComponent } from './buy-product/buy-product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductDetailesComponent,BuyProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyfrstApp';
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  
})
export class ProductsComponent {


  isSidePanelVisible : boolean = false;

  productObj: any = {
    
      "productId": 0,
      "productSku": "",
      "productName": "",
      "productPrice": 0,
      "productShortName": "",
      "productDescription": "",
      "createdDate": new Date(),
      "deliveryTimeSpan": "",
      "categoryId": 0,
      "productImageUrl": "",
  }    


  openSidePanel() {
    this.isSidePanelVisible = !this.isSidePanelVisible
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }


  constructor( private  productService : ProductService) {}

}













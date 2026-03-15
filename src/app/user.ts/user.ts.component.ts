import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-user-ts',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user.ts.component.html',
  styleUrls: ['./user.ts.component.css']
})
export class UserTsComponent {
  products: Product[] = [];   // populate with your product data
  searchTerm: string = '';
  selectedProduct: Product | null = null;

  id: number = 0;
  name: string = '';
  department: string = '';
  position: string = '';
  details: { role: [number, string] } = { role: [0, ''] };


  get filteredProducts(): Product[] {
    if (!this.searchTerm) return this.products;
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  viewProduct(product: Product) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }
}

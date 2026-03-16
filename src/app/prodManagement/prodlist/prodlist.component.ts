import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-prodlist',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './prodlist.component.html',
  styleUrls: ['./prodlist.component.css']
})
export class ProdlistComponent implements OnInit {

  products: Product[] = [];
  selectedId: number | null = null;
  searchTerm = '';
  searchPlaceholder = 'Search by name, category, brand...';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  getProduct(e: Product): void {
    this.selectedId = e.id;
    this.router.navigate(['/prodlist', e.id]);
  }

  getFilteredProducts(): Product[] {

    if (!this.searchTerm) return this.products;

    const term = this.searchTerm.toLowerCase();

    return this.products.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.brand.toLowerCase().includes(term)
    );
  }
  getBadgeClass(status: string): string {
    switch (status) {
      case 'Active': return 'badge-active';
      case 'Inactive': return 'badge-inactive';
      case 'On Hold': return 'badge-hold';
      default: return '';
    }
  }

  goBack(): void {
    this.router.navigate(['/prodlist']);
  }

  goToAddProduct(): void {
    this.router.navigate(['/prodlist/add']);
  }

}
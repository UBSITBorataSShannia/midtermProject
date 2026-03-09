import { Product } from "../models/product.interface";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root',
})
export class ProductService{
    private products: Product[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 50000, stock: 10, status: 'Available', description: 'High performance laptop for Gaming and Coding', brand: 'Asus', rating: 4.5, dateAdded: '2026-01-01' },
    { id: 2, name: 'Phone', category: 'Electronics', price: 20000, stock: 0, status: 'Out of Stock', description: 'Smartphone with Advance', brand: 'Honor', rating: 4.7, dateAdded: '2026-01-05' },
    { id: 3, name: 'Keyboard', category: 'Accessories', price: 1500, stock: 5, status: 'Limited', description: 'Mechanical keyboard', brand: 'Logitech', rating: 4.3, dateAdded: '2026-01-10' },
    { id: 4, name: 'Mouse', category: 'Accessories', price: 800, stock: 20, status: 'Available', description: 'Wireless mouse', brand: 'HP', rating: 4.2, dateAdded: '2026-01-15' },
    { id: 5, name: 'Monitor', category: 'Electronics', price: 12000, stock: 3, status: 'Limited', description: '24-inch LED monitor', brand: 'Acer', rating: 4.6, dateAdded: '2026-01-20' },
    { id: 6, name: 'Printer', category: 'Office', price: 9000, stock: 2, status: 'Limited', description: 'All-in-one printer', brand: 'Canon', rating: 4.1, dateAdded: '2026-01-25' },
    { id: 7, name: 'Tablet', category: 'Electronics', price: 18000, stock: 7, status: 'Available', description: 'Android tablet', brand: 'Lenovo', rating: 4.4, dateAdded: '2026-02-01' },
    { id: 8, name: 'Headset', category: 'Accessories', price: 2500, stock: 15, status: 'Available', description: 'Gaming headset', brand: 'Razer', rating: 4.8, dateAdded: '2026-02-05' },
    { id: 9, name: 'Webcam', category: 'Accessories', price: 3200, stock: 0, status: 'Out of Stock', description: 'HD webcam', brand: 'Logitech', rating: 4.0, dateAdded: '2026-02-10' },
    { id: 10, name: 'Router', category: 'Networking', price: 5000, stock: 6, status: 'Available', description: 'WiFi 6 Router', brand: 'TP-Link', rating: 4.5, dateAdded: '2026-02-15' }
  ];
   selectedProduct: Product | null = null;
    getProducts():Product[]{
        return this.products;
    }
    getProductsById(id: number): Product| undefined{
        return this.products.find(e => e.id === id);
    }

    updateProduct(updated: Product): void {
        const idx = this.products.findIndex(e => e.id === updated.id);
        if (idx !== -1) this.products[idx] = { ...updated }
    }
    

}
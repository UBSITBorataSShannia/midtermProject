// ============================================================
// suppliers-list.component.ts
// Displays all suppliers in a tabular layout.
// Injects SupplierService to get data and Router for navigation.
// ============================================================

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SupplierService } from '../../services/supplier.service';
import { Supplier } from '../../models/supplier.interface';

@Component({
  selector: 'app-suppliers-list',        // HTML tag to use this component
  standalone: true,                       // Standalone component (Angular 17+ style)
  imports: [CommonModule],               // Needed for *ngFor and *ngIf directives
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css']
})
export class SuppliersListComponent implements OnInit {

  // ----------------------------------------------------------
  // PROPERTY: suppliers
  // Holds the array of all supplier records retrieved from
  // the service. Bound to the template via *ngFor.
  // ----------------------------------------------------------
  suppliers: Supplier[] = [];

  // ----------------------------------------------------------
  // CONSTRUCTOR: Dependency Injection
  // Angular injects SupplierService and Router automatically.
  // ----------------------------------------------------------
  constructor(
    private supplierService: SupplierService,  // Injected service for data access
    private router: Router                      // Injected router for programmatic navigation
  ) {}

  // ----------------------------------------------------------
  // LIFECYCLE HOOK: ngOnInit()
  // Runs when the component is initialized.
  // Loads all suppliers from the service into the local array.
  // ----------------------------------------------------------
  ngOnInit(): void {
    this.suppliers = this.supplierService.getSuppliers();
  }

  // ----------------------------------------------------------
  // METHOD: viewSupplierDetails(id)
  // Triggered by the (click) event on each row's View button.
  // Navigates to the parameterized route /suppliers/:id
  // passing the supplier's ID as the route parameter.
  // ----------------------------------------------------------
  viewSupplierDetails(id: number): void {
    this.router.navigate(['/suppliers', id]);
  }

  // ----------------------------------------------------------
  // HELPER: getStatusClass(status)
  // Returns a CSS class name based on supplier status string.
  // Used for color-coding the status badge in the table.
  // ----------------------------------------------------------
  getStatusClass(status: string): string {
    switch (status) {
      case 'Active':   return 'badge badge-active';
      case 'Inactive': return 'badge badge-inactive';
      case 'On Hold':  return 'badge badge-hold';
      default:         return 'badge';
    }
  }
}

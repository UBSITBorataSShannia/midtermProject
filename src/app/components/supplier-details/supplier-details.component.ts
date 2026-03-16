// ============================================================
// supplier-details.component.ts
// Shows full details for a single supplier in an editable form.
// Uses ActivatedRoute to read the :id route parameter and
// SupplierService to fetch and update supplier data.
// ============================================================

import { Component, OnInit }  from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService }     from '../../services/supplier.service';
import { Supplier }            from '../../models/supplier.interface';

@Component({
  selector: 'app-supplier-details',      // HTML tag for this component
  standalone: true,                       // Angular 17+ standalone component
  imports: [CommonModule, FormsModule],  // FormsModule required for [(ngModel)]
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {

  // ----------------------------------------------------------
  // PROPERTY: supplier
  // Holds the currently loaded supplier object.
  // Initialized as undefined until loaded from the service.
  // Bound to the form fields via [(ngModel)] two-way binding.
  // ----------------------------------------------------------
  supplier: Supplier | undefined;

  // ----------------------------------------------------------
  // PROPERTY: supplierId
  // Stores the numeric ID extracted from the route parameter.
  // Used to fetch the correct supplier record on load.
  // ----------------------------------------------------------
  supplierId: number = 0;

  // ----------------------------------------------------------
  // PROPERTY: saveSuccess
  // Controls the visibility of the success notification message
  // shown after the user clicks Save.
  // ----------------------------------------------------------
  saveSuccess: boolean = false;

  // ----------------------------------------------------------
  // PROPERTY: productsText
  // A string representation of the productsSupplied array.
  // We use a string for the textarea [(ngModel)] binding,
  // then convert it back to array on save.
  // ----------------------------------------------------------
  productsText: string = '';

  // ----------------------------------------------------------
  // CONSTRUCTOR: Dependency Injection
  // Angular injects ActivatedRoute, Router, and SupplierService.
  // ----------------------------------------------------------
  constructor(
    private route: ActivatedRoute,            // Access current route parameters
    private router: Router,                   // Programmatic navigation
    private supplierService: SupplierService  // Data access and update
  ) {}

  // ----------------------------------------------------------
  // LIFECYCLE HOOK: ngOnInit()
  // Subscribes to the route params observable to extract the id
  // parameter, then fetches the matching supplier from the service.
  // ----------------------------------------------------------
  ngOnInit(): void {
    // Subscribe to route params to get the :id parameter
    this.route.params.subscribe(params => {
      this.supplierId = +params['id']; // '+' converts string to number

      // Fetch the supplier from the service using the extracted ID
      const found = this.supplierService.getSupplierById(this.supplierId);

      if (found) {
        // Spread to create a local copy so edits don't directly mutate
        // the service array until the user explicitly clicks Save
        this.supplier = { ...found, productsSupplied: [...found.productsSupplied] };

        // Convert the products array to a comma-separated string for textarea
        this.productsText = found.productsSupplied.join(', ');
      }
    });
  }

  // ----------------------------------------------------------
  // METHOD: saveChanges()
  // Called when the user clicks the Save button.
  // Converts the productsText string back to an array,
  // then calls the service's updateSupplier() to persist changes.
  // ----------------------------------------------------------
  saveChanges(): void {
    if (this.supplier) {
      // Convert comma-separated string back to a trimmed array
      this.supplier.productsSupplied = this.productsText
        .split(',')
        .map(p => p.trim())
        .filter(p => p.length > 0);

      // Persist the updated supplier to the service
      this.supplierService.updateSupplier(this.supplier);

      // Show the success notification message
      this.saveSuccess = true;

      // Auto-hide the notification after 3 seconds
      setTimeout(() => this.saveSuccess = false, 3000);
    }
  }

  // ----------------------------------------------------------
  // METHOD: goBack()
  // Called when the user clicks the Back button.
  // Navigates the user back to the suppliers list route.
  // ----------------------------------------------------------
  goBack(): void {
    this.router.navigate(['/suppliers']);
  }
}

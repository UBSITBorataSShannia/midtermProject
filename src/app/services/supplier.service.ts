// ============================================================
// supplier.service.ts
// Centralized service for all supplier data and operations.
// Injectable at root level — shared across all components via
// Angular's Dependency Injection system.
// ============================================================

import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.interface';

@Injectable({
  providedIn: 'root'   // Registers this service with the root injector (singleton)
})
export class SupplierService {

  // ----------------------------------------------------------
  // PRIVATE: Mock data array — acts as our in-memory "database"
  // Contains 10 diverse supplier records for demonstration
  // ----------------------------------------------------------
  private suppliers: Supplier[] = [
    {
      id: 1,
      supplierName: 'Luzon Agricultural Supplies Co.',
      location: 'Quezon City, Metro Manila',
      email: 'contact@luzonagri.ph',
      contactPerson: 'Maria Santos',
      phone: '+63 917 123 4567',
      productsSupplied: ['Rice', 'Corn', 'Fertilizers', 'Seeds'],
      status: 'Active',
      website: 'https://luzonagri.ph',
      notes: 'Preferred supplier for bulk agricultural goods.'
    },
    {
      id: 2,
      supplierName: 'Visayas Tech Parts Inc.',
      location: 'Cebu City, Cebu',
      email: 'sales@visayastech.com',
      contactPerson: 'Juan dela Cruz',
      phone: '+63 918 234 5678',
      productsSupplied: ['Electronic Components', 'Circuit Boards', 'Cables'],
      status: 'Active',
      website: 'https://visayastech.com',
      notes: 'Specializes in bulk electronic sourcing.'
    },
    {
      id: 3,
      supplierName: 'Mindanao Fresh Produce',
      location: 'Davao City, Davao del Sur',
      email: 'info@mindanaofresh.ph',
      contactPerson: 'Rosa Reyes',
      phone: '+63 919 345 6789',
      productsSupplied: ['Bananas', 'Durian', 'Pineapple', 'Coconut'],
      status: 'Active',
      website: 'https://mindanaofresh.ph',
      notes: 'Top exporter of tropical fruits in Mindanao.'
    },
    {
      id: 4,
      supplierName: 'Manila Office Essentials',
      location: 'Makati City, Metro Manila',
      email: 'orders@manilaoffice.com',
      contactPerson: 'Carlos Bautista',
      phone: '+63 920 456 7890',
      productsSupplied: ['Paper', 'Ink Cartridges', 'Office Furniture', 'Stationery'],
      status: 'Active',
      website: 'https://manilaoffice.com',
      notes: 'Fast turnaround on office supply orders.'
    },
    {
      id: 5,
      supplierName: 'Batangas Chemical Solutions',
      location: 'Batangas City, Batangas',
      email: 'supply@batchem.ph',
      contactPerson: 'Elena Villanueva',
      phone: '+63 921 567 8901',
      productsSupplied: ['Industrial Cleaners', 'Solvents', 'Lab Reagents'],
      status: 'On Hold',
      website: 'https://batchem.ph',
      notes: 'Account currently under review for compliance.'
    },
    {
      id: 6,
      supplierName: 'Iloilo Textile Traders',
      location: 'Iloilo City, Iloilo',
      email: 'textiles@ilotrade.com',
      contactPerson: 'Andres Gomez',
      phone: '+63 922 678 9012',
      productsSupplied: ['Fabric Rolls', 'Threads', 'Zippers', 'Buttons'],
      status: 'Active',
      website: 'https://ilotrade.com',
      notes: 'Wide selection of indigenous Filipino textiles.'
    },
    {
      id: 7,
      supplierName: 'Pampanga Food Ingredients',
      location: 'Angeles City, Pampanga',
      email: 'foodsupply@pampangafood.ph',
      contactPerson: 'Lourdes Manalo',
      phone: '+63 923 789 0123',
      productsSupplied: ['Cooking Oil', 'Spices', 'Flour', 'Sugar', 'Salt'],
      status: 'Active',
      website: 'https://pampangafood.ph',
      notes: 'Reliable supplier for restaurant and bakery needs.'
    },
    {
      id: 8,
      supplierName: 'Cagayan Valley Timber Corp.',
      location: 'Tuguegarao City, Cagayan',
      email: 'timber@cagayantimber.ph',
      contactPerson: 'Roberto Pascual',
      phone: '+63 924 890 1234',
      productsSupplied: ['Lumber', 'Plywood', 'Bamboo', 'Hardwood'],
      status: 'Inactive',
      website: 'https://cagayantimber.ph',
      notes: 'Currently inactive — awaiting permit renewal.'
    },
    {
      id: 9,
      supplierName: 'Laguna Plastics Manufacturing',
      location: 'Santa Rosa City, Laguna',
      email: 'plastics@lagunamanufacturing.com',
      contactPerson: 'Teresita Flores',
      phone: '+63 925 901 2345',
      productsSupplied: ['PVC Pipes', 'Plastic Containers', 'Packaging Materials'],
      status: 'Active',
      website: 'https://lagunamanufacturing.com',
      notes: 'Compliant with local environmental standards.'
    },
    {
      id: 10,
      supplierName: 'Benguet Mountain Herbs & Spices',
      location: 'Baguio City, Benguet',
      email: 'herbs@benguetnaturals.ph',
      contactPerson: 'Antonio Soriano',
      phone: '+63 926 012 3456',
      productsSupplied: ['Herbal Teas', 'Organic Spices', 'Essential Oils', 'Dried Flowers'],
      status: 'Active',
      website: 'https://benguetnaturals.ph',
      notes: 'Certified organic produce from the Cordillera.'
    }
  ];

  // ----------------------------------------------------------
  // PUBLIC METHOD: getSuppliers()
  // Returns the full array of all supplier records.
  // Used by SuppliersList to populate the table.
  // ----------------------------------------------------------
  getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  // ----------------------------------------------------------
  // PUBLIC METHOD: getSupplierById(id)
  // Finds and returns a single supplier matching the given id.
  // Returns undefined if no match is found.
  // Used by SupplierDetails to load a specific supplier.
  // ----------------------------------------------------------
  getSupplierById(id: number): Supplier | undefined {
    return this.suppliers.find(supplier => supplier.id === id);
  }

  // ----------------------------------------------------------
  // PUBLIC METHOD: updateSupplier(updatedSupplier)
  // Finds the matching supplier by id in the array and replaces
  // it with the updated data. Spreads the object to ensure
  // immutability of the incoming reference.
  // Used by SupplierDetails Save button to persist changes.
  // ----------------------------------------------------------
  updateSupplier(updatedSupplier: Supplier): void {
    const index = this.suppliers.findIndex(s => s.id === updatedSupplier.id);
    if (index !== -1) {
      // Replace the existing record with the updated supplier data
      this.suppliers[index] = { ...updatedSupplier };
    }
  }
}
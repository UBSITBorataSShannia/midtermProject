export interface Supplier {
  id: number;                       // Unique identifier for the supplier
  supplierName: string;             // Full company/supplier name
  location: string;                 // City, Province/Country location
  email: string;                    // Primary contact email address
  contactPerson: string;            // Name of the main contact person
  phone: string;                    // Phone number of the contact
  productsSupplied: string[];       // List of products/categories supplied
  status: string;                   // Active | Inactive | On Hold
  website?: string;                 // Optional: company website URL
  notes?: string;                   // Optional: additional remarks
}
import { Routes } from '@angular/router';
import { HomeComponent } from './components/comp-home/comp-home';
import { Interpolation } from './databinding/interpolation/interpolation';
import { PropertyBinding } from './databinding/property-binding/property-binding';
import { TwoWayBinding } from './databinding/two-way-binding/two-way-binding';
import { EventBinding } from './databinding/event-binding/event-binding';
import { ProductsComponent } from './products/products.component';
import { ProdlistComponent } from './prodManagement/prodlist/prodlist.component';
import { ViewDetailsComponent } from './prodManagement/view-details/view-details.component';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { SupplierDetailsComponent } from './components/supplier-details/supplier-details.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'interpolation', component: Interpolation},
    {path: 'property-binding', component: PropertyBinding},
    {path: 'two-way-binding', component: TwoWayBinding},
    {path: 'event-binding', component: EventBinding},
      { path: 'products', component: ProductsComponent },

  {
    path: 'prodlist',
    component: ProdlistComponent,
    children: [
      { path: ':id', component: ViewDetailsComponent }
    ]
  },
  { path: '', redirectTo: '/suppliers', pathMatch: 'full' },
  { path: 'suppliers', component: SuppliersListComponent, title: 'Suppliers Management' },
  { path: 'suppliers/:id', component: SupplierDetailsComponent, title: 'Supplier Details'  },
  { path: '**', redirectTo: '/suppliers'}
];


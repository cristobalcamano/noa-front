import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './page/company/company.component';
import { NosotrosComponent } from './page/company/nosotros/nosotros.component';
import { ContactComponent } from './page/company/contact/contact.component';
import { ServicesComponent } from './page/services/services.component';
import { ProductServiceComponent } from './page/services/product-service/product-service.component';
import { SaleComponent } from './page/sale/sale.component';

const routes: Routes = [
  {path:'', component: CompanyComponent},
  {path:'category', component: ServicesComponent},
  {path:'us', component: NosotrosComponent},
  {path:'product', component: ProductServiceComponent},
  {path:'contact', component: ContactComponent},
  {path:'sale', component: SaleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

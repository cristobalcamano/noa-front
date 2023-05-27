import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './page/company/company.component';
import { NavComponent } from './page/shared/nav/nav.component';
import { FooterComponent } from './page/shared/footer/footer.component';
import { ServicesComponent } from './page/services/services.component';
import { ProductServiceComponent } from './page/services/product-service/product-service.component';
import { NosotrosComponent } from './page/company/nosotros/nosotros.component';
import { ContactComponent } from './page/company/contact/contact.component';
import { ServicesModelComponent } from './page/company/modal/services/services-model.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaleComponent } from './page/sale/sale.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './page/security/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    NavComponent,
    FooterComponent,
    ServicesComponent,
    ProductServiceComponent,
    NosotrosComponent,
    ContactComponent,
    ServicesModelComponent,
    SaleComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

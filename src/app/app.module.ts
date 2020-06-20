import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
//import { ComponentComponent } from './component/component.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CategoryComponent } from './component/category/category.component';
import { ProductComponent } from './component/product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WrapperComponent } from './wrapper/wrapper.component';
//import { BackendComponent } from './backend/backend.component';
//import { ServiceComponent } from './login/service/service.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { BrandComponent } from './component/brand/brand.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    PageNotFoundComponent,
    WrapperComponent,
    RegisterComponent,
    BrandComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

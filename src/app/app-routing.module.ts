import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { CategoryComponent } from './component/category/category.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductComponent } from './component/product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { WrapperComponent } from './wrapper/wrapper.component';
import  { BrandComponent } from './component/brand/brand.component';

const routes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'wrapper',
        component: WrapperComponent,
        children:[
            {path: '',redirectTo:'dashboard', pathMatch: 'full'},
            { path: 'dashboard', component: DashboardComponent},
            { path: 'category', component: CategoryComponent},
            { path: 'product', component: ProductComponent},
            { path: 'brand', component: BrandComponent}
        ]
    },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { EmployeeComponent } from './employee/employee.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductCrudComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'about', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: "products/create", component: ProductCreateComponent },
  { path: "products/update/:id", component: ProductUpdateComponent },
  { path: "products/delete/:id", component: ProductDeleteComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

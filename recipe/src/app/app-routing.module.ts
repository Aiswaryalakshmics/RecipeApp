import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './signup/signup.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  //http://localhost:4200/users
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },

  //http://localhost:4200/
  { path:'',component:HomeComponent},

  //http://localhost:4200/login
  { path:'login',component:LoginComponent},

   //http://localhost:4200/signup
  { path: 'signup', component:SignUpComponent },

  //http://localhost:4200/categories
  {path:'categories',component:CategoriesComponent},

  //http://localhost:4200/dashboard
  {path : 'dashboard',component:DashboardComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

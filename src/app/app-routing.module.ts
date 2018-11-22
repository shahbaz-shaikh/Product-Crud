/**
 * @author - Shahbaz Shaikh
 * @description - This AppRouting file are main lazy loading routing file.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'product',
    loadChildren: 'app/product/product.module#ProductModule'
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

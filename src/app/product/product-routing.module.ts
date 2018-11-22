/**
 *  @author - Shahbaz Shaikh
 *  @description - This product routing file create for product routing module.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//------------------------------------------------//
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

// Cretae routes for product module
const productRoutes: Routes = [
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }

/**
 *  @author - Shahbaz Shaikh
 *  @description - This mudule file crete for product lazy loading.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//--------------------------------------------//
import { ProductRoutingModule } from './product-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AddComponent, 
    ViewComponent, 
    EditComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }

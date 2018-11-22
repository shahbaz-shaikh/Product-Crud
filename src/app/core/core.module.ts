/**
 * @author - Shahbaz Shaikh
 * @description - This core module are use for not create any new instance of any component or service.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './navbar/topbar/topbar.component';
import { SidebarComponent } from './navbar/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TopbarComponent, 
    SidebarComponent
  ],
  exports: [
    TopbarComponent,
    SidebarComponent
  ]
})
export class CoreModule { }

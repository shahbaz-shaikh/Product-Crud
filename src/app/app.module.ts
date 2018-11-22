/**
 * @author - Shahbaz Shaikh
 * @description - This App module are root module of application.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//-------------------------------------------------//
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductMemoryDataService } from './product-memory-data.service';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      ProductMemoryDataService, {  dataEncapsulation: false }),
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

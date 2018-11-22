/**
 * @author - Shahbaz Shaikh
 * @description - This view component class create for view the data and delete the data.
 */
import { Component, OnInit } from '@angular/core';
//-------------------------------------------//
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  // Declare the variable
  public products: Product[];

  /**
   * Inject the product service in constructor
   * @param viewService 
   */
  constructor(private viewService: ProductService) {

    // Define the variable
    this.products = [];
  }

  ngOnInit() {
    // Get method initialization
    this.getProducts();
  }

  // Get method get the data from the serve and send to user
public  getProducts(): void {
    
    this.viewService.getProducts()
      .subscribe((product) => {
        this.products = product
      });
  }

  /**
   * deleteProduct method are delete the product in server
   * @param id - Get the product id from user
   */
public  deleteProduct(id: number): void{
    // Send the product id to product service
    this.viewService.deleteProduct(id)
          .subscribe ( () => this.getProducts());
  }

}

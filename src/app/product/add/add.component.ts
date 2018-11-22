/**
 * @author - Shahbaz Shaikh
 * @description - This add component class use for add the product on server.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//---------------------------------------------//
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  // Declare the variable
  public productForm: FormGroup;

  /**
   * 
   * @param addService - inject the product service
   * @param fb - inject the form bulider
   */
  constructor(private addService: ProductService, private fb: FormBuilder, private router: Router) {
   }
   
  ngOnInit() {
    this.saveForm();
  }

  /**
   * saveForm method are use for save the data using reactive form
   */
public saveForm(){
  this.productForm = this.fb.group({
    name: ['',[Validators.required]],
    description: ['',[Validators.required]],
    date: ['',[Validators.required]],
    price: ['',[Validators.required]]
  });
}

  /**
   * onSubmit method are use to get data from user and save on server
   */
public onSubmit(): void{

  // Get the productForm value
  let prod = Object.assign({}, this.productForm.value);

  this.addService.addProduct(prod).subscribe(() => {
    // Reset the product form
    this.productForm.reset();
    // successfully product add the Navigate the add product page to view product page 
    this.router.navigate(['/product/view']);
  });
}

}

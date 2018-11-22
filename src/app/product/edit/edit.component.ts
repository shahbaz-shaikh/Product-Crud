/**
 * @author - Shahbaz Shaikh
 * @description - This view component class create for edit the existing product on server.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//------------------------------------------//
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  // Declear the variable
  public product: Product;
  public productForm: FormGroup;

  constructor(private editService: ProductService,  private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    // Create a new instance of product
    this.product = new Product();
   }

  ngOnInit() {
    this.editForm();
    this.editProduct();
  }

public editForm(){
  this.productForm = this.fb.group({
    id: ['',[Validators.required]],
    name: ['',[Validators.required]],
    description: ['',[Validators.required]],
    date: ['',[Validators.required]],
    price: ['',[Validators.required]]
  });
}

public editProduct(): void{

  const id = +this.route.snapshot.paramMap.get('id');

  this.editService.editProduct(id)
        .subscribe( (product) => {
          this.product = product,

      this.productForm.patchValue({
        id: this.product.id,
        name: this.product.name,
        description: this.product.description,
        date: this.product.date,
        price: this.product.price
      })
  });
}

public onSubmit(): void{
  this.editService.updateProduct(this.productForm.value)
        .subscribe( () => {
          
          this.router.navigate(['/product/view']);
          alert('Update Record Suceefully.');
    });

}

}

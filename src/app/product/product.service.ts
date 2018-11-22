/**
 * @author - Shahbaz Shaikh
 * @description - This product service create for communicate with componet to database.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//-------------------------------------------------//
import { Product } from './product.model';

@Injectable()
export class ProductService {

  // Web api url for Product Data service
  private productUrl = 'api/productsData';

  constructor(private http: HttpClient) { }

  /**
   * getProduct Method
   * Get product method are get data from the server using GET method
   */
public  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl);
  }

   /**
   * deleteProduct Method
   * Delete product method are delete data from the server using DELETE method
   * @param id - get the product id from user
   */
public  deleteProduct(id: number): Observable<Product>{
  const url = this.productUrl + `/` + id;
    return this.http.delete<Product>(url);
}

  /**
   * addProduct method are use for add the project detail using POST method
   * @param product - Send the product object
   */
public addProduct(product: Product): Observable<Product>{
  return this.http.post<Product>(this.productUrl, product)
}  

/**
 * editProduct Method
 * editProduct method are use to Get the data from server.
 */
public editProduct(id: number): Observable<Product>{
  const url = this.productUrl+ `/` +id;
    return this.http.get<Product>(url);
}

/**
 * updateProduct method
 * updateProduct method are update the existing product using PUT method
 * @param product - Get the product update from user
 */
public updateProduct(product: Product): Observable<Product>{
  return this.http.put<Product>(this.productUrl, product);
}

}

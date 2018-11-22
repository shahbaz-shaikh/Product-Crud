/**
 * @author - Shahbaz Shaikh
 * @description - This product memory data service create for dummy database server.
 */
import { Injectable } from '@angular/core';
//-----------------------------------------//
import { Product } from './product/product.model';


@Injectable()
export class ProductMemoryDataService implements ProductMemoryDataService{

  /**
     * create a dummy Database.
     * Asign the value of array.
  */
  createDb(){
    const productsData: Product[]=[
      {
        id: 101,
        name: 'T-shirt',
        description: 'Nike T-shirt for Men.',
        date: new Date('2018-11-19'),
        price: 3500
      },
      {
        id: 102,
        name: 'Shoes',
        description: 'Reebook shoes for Girls',
        date: new Date('2018-07-04'),
        price: 4800
      },
      {
        id: 103,
        name: 'Watch',
        description: 'Fastrack 3153KP01 Watch - For Men',
        date: new Date('2018-09-21'),
        price: 2700
      }
    ]
    return {productsData};
  }

}

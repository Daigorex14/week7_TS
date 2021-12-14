import { Injectable } from '@angular/core';
import { Product } from './components/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() : Product[]{
    return [
    new Product(1,"Fried Chicken",100,0,"https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?cs=srgb&dl=pexels-pixabay-60616.jpg&fm=jpg"),
    new Product(2,"Nugget",50,50,"https://images.pexels.com/photos/4021931/pexels-photo-4021931.jpeg"),
    new Product(3,"Mashed Potato",75,100,"https://images.pexels.com/photos/5507575/pexels-photo-5507575.jpeg"),
    new Product(4,"Egg Tart",85,50,"https://images.pexels.com/photos/5677314/pexels-photo-5677314.jpeg"),
    new Product(5,"Chicken Burger",200,120,"https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg")
  ];
  }
}

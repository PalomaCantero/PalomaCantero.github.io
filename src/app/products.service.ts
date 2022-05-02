import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Proveedor,PROVEEDORES, Product,PRODUCTOS} from './product-db';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProveedores():Observable<Proveedor[]>{
    const proveedores = of(PROVEEDORES);
    return proveedores;
  }
  getProductos():Observable<Product[]>{
    const productos = of(PRODUCTOS);
    return productos;
  }
  constructor() { }
}

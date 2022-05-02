import { Component } from '@angular/core';
import { ProductsService } from './products.service';

import { Product,PRODUCTOS,Proveedor} from './product-db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  PRODUCTOS:Product[]= [];
  PROVEEDORES:Proveedor[]=[];
  toShowProducto:Product[]=[];
  input_value:string='';
  selectedProduct:number=0;

  show:string="home";

  constructor(private productService: ProductsService ) { }
  
  ngOnInit(): void {
    this.getProveedores();
    this.getProductos();
    this.changeFunc();
  }
  getProveedores():void{
    this.productService.getProveedores().
      subscribe(proveedores => this.PROVEEDORES = proveedores)
  }
  getProductos():void{
    this.productService.getProductos().
      subscribe(productos => this.PRODUCTOS = productos)
  }



  showProduct(id:number):void{
    this.show="detail";
    this.selectedProduct = id;
  }
  unshowProducts():void{
    this.show="home";
  }
  showLogin():void{
    this.show="login";
  }
  showRegister():void{
    this.show="register";
  }

  changeFunc():void{
    this.toShowProducto=[]
    for (let i = 0; i < this.PRODUCTOS.length; i++) {
      if (this.PRODUCTOS[i].name.toUpperCase().includes(this.input_value.toLocaleUpperCase())){
        this.toShowProducto.push(this.PRODUCTOS[i])
      }
    }
  }

// Retorna un número aleatorio entre min (incluido) y max (excluido)
  getRandomArbitrary(min:number, max:number):number {
    return Math.random() * (max - min) + min;
  }


}

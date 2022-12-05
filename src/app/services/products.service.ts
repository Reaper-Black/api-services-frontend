import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL = 'https://api-services-backend-production.up.railway.app/apiservices/products/'
  
  /*'http://localhost:3000/apiservices/products/'*/

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(this.URL + 'getproducts');
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(this.URL + id);
  }

  guardarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.URL + 'createproduct', producto);
  }

  obtenerProducto(id: string): Observable<any> {
    return this.http.get(this.URL + id);
  }

  editarProducto(id: string, producto: Producto): Observable<any> {
    return this.http.put(this.URL + id, producto);
  }
}

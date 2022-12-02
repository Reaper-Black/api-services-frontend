import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  listProductos: Producto[] = [];

  constructor(
    private _productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._productsService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarProducto(id: any) {
    this._productsService.eliminarProducto(id).subscribe(data => {
      Swal.fire({
        title: 'Seguro de eliminar este producto?',
        text: "No podrás revertir esto despues!!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminalo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'El producto fue eliminado con exito!',
            'Producto Eliminado',
            'success'
          )
        }
      })
      this.obtenerProductos();
    }, error => {
      console.log(error);
    })
  }

}

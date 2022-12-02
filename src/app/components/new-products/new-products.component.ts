import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto } from 'src/app/models/producto';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {

  productoForm: FormGroup;
  titulo = 'Crear producto';
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _productoService: ProductsService,
    private aRouter: ActivatedRoute) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto() {

    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    if (this.id !== null) {

      this._productoService.editarProducto(this.id, PRODUCTO).subscribe(data => {
        Swal.fire(
          'El producto editado con exito!',
          'Producto Editado!',
          'success'
        )
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })

    } else {
      console.log(PRODUCTO);
      this._productoService.guardarProducto(PRODUCTO).subscribe(data => {
        Swal.fire(
          'El producto fue registrado con exito!',
          'Producto Registrado!',
          'success'
        )
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })
    }
  }

  esEditar() {

    if (this.id !== null) {
      this.titulo = 'Editar producto';
      this._productoService.obtenerProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio,
        })
      })
    }
  }


}

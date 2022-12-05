import { Component, OnInit } from '@angular/core'
import { Usuario } from '../../models/user'
import { UsersService } from '../../services/users.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  listUsuarios: Usuario[] = [];

  constructor(
    private _usuariosService: UsersService
  ) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    this._usuariosService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listUsuarios = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarUsuario(id: any) {
    this._usuariosService.eliminarUsuario(id).subscribe(data => {
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
      this.obtenerUsuario();
    }, error => {
      console.log(error);
    })
  }
}

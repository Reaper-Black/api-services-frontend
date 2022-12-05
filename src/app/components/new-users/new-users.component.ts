import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../models/user';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css']
})
export class NewUsersComponent implements OnInit {

  usuarioForm: FormGroup
  titulo = 'Crear usuario'
  id: string | null

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _usuarioService: UsersService,
    private aRouter: ActivatedRoute
  ) {
    this.usuarioForm = this.fb.group({
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
      rol: ['', Validators.required],
      date: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarUsuario() {
    const USUARIO: Usuario = {
      email: this.usuarioForm.get('email')?.value,
      firstname: this.usuarioForm.get('firstname')?.value,
      lastname: this.usuarioForm.get('lastname')?.value,
      password: this.usuarioForm.get('password')?.value,
      rol: this.usuarioForm.get('rol')?.value,
      date: this.usuarioForm.get('date')?.value,
      age: this.usuarioForm.get('age')?.value,
      address: this.usuarioForm.get('address')?.value
    }

    if (this.id !== null) {

      this._usuarioService.editarUsuario(this.id, USUARIO).subscribe(data => {
        Swal.fire(
          'El usuario fue editado con exito!',
          'Usuario Editado!',
          'success'
        )
      }, error => {
        console.log(error);
        this.usuarioForm.reset();
      })

    } else {
      console.log(USUARIO);
      this._usuarioService.guardarUsuario(USUARIO).subscribe(data => {
        Swal.fire(
          'El usuario fue registrado con exito!',
          'Usuario Registrado!',
          'success'
        )
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.usuarioForm.reset();
      })
    }
  }

  esEditar(){
    if(this.id !== null) {
      this.titulo = 'Editar usuario';
      this._usuarioService.obtenerUsuario(this.id).subscribe(data => {
        this.usuarioForm.setValue({
          email: data.email,
          firstname: data.firstname,
          lastname: data.lastname,
          password: data.password,
          rol: data.rol,
          date: data.date,
          age: data.age,
          address: data.address
        })
      })
    }
  }
}

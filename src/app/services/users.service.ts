import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:3000/apiservices/usuarios/'

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(this.url + 'getuser');
  }

  eliminarUsuario(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(this.url + 'newuser', usuario);
  }

  obtenerUsuario(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarUsuario(id: string, usuario: Usuario): Observable<any> {
    return this.http.put(this.url + id, usuario);
  }
}

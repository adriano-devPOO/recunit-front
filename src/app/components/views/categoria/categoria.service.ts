import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { } 

  findAll():Observable<Categoria[]>{
    return this.http.get<Categoria[]>( 'https://recup-pos-unit.herokuapp.com/categorias')
  }
}

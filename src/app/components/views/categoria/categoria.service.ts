import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient, private _snack: MatSnackBar) { } 

  findAll():Observable<Categoria[]>{
    return this.http.get<Categoria[]>('https://recup-pos-unit.herokuapp.com/categorias')
  }

  create(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>('https://recup-pos-unit.herokuapp.com/categorias', categoria);
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}

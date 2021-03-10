import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriaDeleteComponent } from './categoria-delete/categoria-delete.component';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  

  constructor(private http: HttpClient, private _snack: MatSnackBar) { } 

  findAll():Observable<Categoria[]>{
    
    return this.http.get<Categoria[]>('https://recup-pos-unit.herokuapp.com/categorias')
  }

  findById(id: String): Observable<Categoria>{
    return this.http.get<Categoria>('https://recup-pos-unit.herokuapp.com/categorias/' + id)
  }

  create(categoria: Categoria): Observable<Categoria>{
   
    return this.http.post<Categoria>('https://recup-pos-unit.herokuapp.com/categorias', categoria);
  }

  delete(id: String): Observable<void>{
    return this.http.delete<void>('https://recup-pos-unit.herokuapp.com/categorias/' + id)
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}

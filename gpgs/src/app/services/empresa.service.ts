import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Empresa } from '../model/empresa';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private url= 'http://localhost:8080/api/v1/empresas/'

  constructor(private http: HttpClient) {

   }

   /**
    * Método que hace una petición POST al backend para añadir una empresa
    * 
    * @param empresa 
    * 
    * @returns la respuesta del backend, en este caso, la empresa insertada
    */
  addEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.url, empresa, this.httpOptions).pipe(
      tap((empresaAñadida: Empresa) => console.log(`Empresa añadida: id=${empresaAñadida.cif}`)),
      catchError(this.handleError<Empresa>('addEmpresa'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

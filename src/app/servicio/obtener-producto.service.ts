import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'app/clases/producto.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerProductoService {

  private urlApi = "http://170.239.84.1:9102/api/Producto";

  constructor(private http:HttpClient) { }

  obtenerProducto(){
    return this.http.get(this.urlApi);
  }

  agregarProducto(producto: Producto){
    return this.http.post(this.urlApi, producto );
  }

  /*agregarCliente():Observable{
    return this.http.post();
  }

  */
}

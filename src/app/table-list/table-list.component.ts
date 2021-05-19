import { Component, OnInit } from '@angular/core';
import { Producto } from 'app/clases/producto.component';
import { ObtenerProductoService } from 'app/servicio/obtener-producto.service';
import { data } from 'jquery';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  public listadoProductos: Array<any> = [];

  public productoPrueba: Producto;

  

  constructor( private producto: ObtenerProductoService) { 



    this.producto.obtenerProducto().subscribe((resp:any)=> {
      this.listadoProductos=resp
      console.log(resp);
    })
  }

  ngOnInit() {
  this.productoPrueba={
    id:0,
    nombre:'GPU',
    descripcion:'ES una tarjeta Grafica',
    precio:5999
  }
  

  }

  
  
  agregarProducto(){
    this.producto.agregarProducto(this.productoPrueba).subscribe(data);
    return 
  }
  


}

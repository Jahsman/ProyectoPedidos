import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'app/clases/cliente.compontent';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  cliente: Cliente= {
    id:0,
    nombre:'',
    apellido:'',
    comuna:'',
    direccion:'',
    nro:0,
    telefono:0
  }

  public listadoClientes: Array<any>;


  constructor() { }

  ngOnInit() {
  
    this.listadoClientes = [
     
    ]
      
      
    

  }
  
  agregarCliente(f:NgForm){
  console.log(this.listadoClientes);

  this.listadoClientes.push(f.value);
  console.log(this.listadoClientes)
  }

}

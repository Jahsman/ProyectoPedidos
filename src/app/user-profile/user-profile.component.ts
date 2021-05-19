import { Component, OnInit } from '@angular/core';
import { Cliente } from 'app/clases/cliente.compontent';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  agregarCliente(cliente: Cliente){
  
  }

}

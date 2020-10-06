import { Component, OnInit,HostBinding } from '@angular/core';

@Component({
  selector: 'app-lista-mensajes',
  templateUrl: './lista-mensajes.component.html',
  styleUrls: ['./lista-mensajes.component.css']
})
export class ListaMensajesComponent implements OnInit {
  @HostBinding('attr.class') ccsClass='container content';
  
  mensajes:string[];
  
  constructor() {
    this.mensajes = [];
  }

  ngOnInit(): void {
  }

  guardar(nombre:string,mensaje:string):boolean{
    this.mensajes.push(`(${nombre}): ${mensaje}`);
    return false;
  }

}

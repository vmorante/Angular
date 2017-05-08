import { Component } from '@angular/core';
import { ContactosService } from '../servicios/contactos.service';
import { Contacto } from '../entidades/contacto';

@Component({

    template: ` <h1> Nuevo contacto</h1>
    <formulario-contacto (formularioAceptado)="guardarContacto($event)"></formulario-contacto>`

})

export class NuevoContactoComponent{
    constructor( private _contactosService: ContactosService) {}
     guardarContacto(contacto: Contacto){
    this._contactosService.guardarContacto(contacto)
                          .subscribe(contacto =>{alert('creado')});
  }
}

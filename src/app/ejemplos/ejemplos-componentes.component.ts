import { Component } from '@angular/core';

@Component({
  selector: 'ejemplos-componentes',
  templateUrl: './ejemplos-componentes.component.html'
})
export class EjemplosComponentesComponent {

  escribeMensaje(mensaje: string) {
    console.log(mensaje);
  }

}

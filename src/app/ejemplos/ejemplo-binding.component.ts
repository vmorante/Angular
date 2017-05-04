import {Component}  from '@angular/core';


@Component({
    selector: 'ejemplos-binding',
    templateUrl:'/app/ejemplos/ejemplo-binding.component.html',
    styles: [`
    .caja {
      width: 50px;
      height: 50px;
      background-color: red;
    }
  `]

})

export class EjemploBindingComponent{
     alumnos: string = 'Babel';

  numeroDeLaSuerte: number = 43;

  // binding de propiedades
  textAreaLineas: number = 6;

  // binding de clases
  pintamosClase: boolean = true;
  clases: any = { uno: false, dos: true};

  mensaje: string = 'cambiame';

   obtenerColor(): string {
    return 'green';
  }

  obtenerEstilos(): any {
    return {
      backgroundColor: 'red', // background-color, sin guiones!!!!!
      color: 'white'
    };
  }

  mostrarMensaje(): void {
    alert('Hola señores');
  }
}
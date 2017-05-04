import {Component, Input, Output,EventEmitter } from  '@angular/core';


@Component({
    selector:'caja',
    template:`<div [style.backgroundColor]="color"
    (mouseenter)="notificar()"> </div>`,
    styles:[`
    div{
        width:100px;
        height:100px;
       
    }
    `]
})

export class CajaComponent{
    //recibimos color como parametro de entrada de los componentes
    @Input() color:string = 'red';

    //definimos un emisor de   eventos al padre
    @Output() encima: EventEmitter<string> =new EventEmitter();


    notificar(){
        console.log('raton encima');
        this.encima.emit(`El color de la caja es  ${this.color}`)
    }
}
        
    
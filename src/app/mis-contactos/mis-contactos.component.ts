import { Component, OnInit } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';
import { ActivatedRoute } from '@angular/router';

@Component({

    templateUrl:'./mis-contactos.component.html'


})

export class MisContactosComponent implements OnInit{
     listaContactos: Contacto[];

  contactoSeleccionado: Contacto;
  constructor(
     private _contactosService: ContactosService,
     private _activatedRoute: ActivatedRoute
     
     ) {}


    ngOnInit(): void {
    //  this._contactosService.obtenerContactos()
    //  .subscribe(contactos => {
    //    this.listaContactos=contactos;
    //   });

    this._activatedRoute.data.forEach((data :any)=>{
      this.listaContactos =data.contactos;
    })
  }

  mostrarDetalles(contacto: Contacto): void {
    this.contactoSeleccionado = contacto;
  }
  navegarRuta(ruta:string){
    console.log('navegar',ruta);
    window.open(ruta,'_blank');
  }
eliminarContacto(contacto:Contacto){
 if(confirm(`Estas seguro que quieres eliminar a  ${contacto.nombre}?`)){
   this._contactosService.eliminarContacto(contacto)
   .subscribe(() => {
     console.log('eliminado');
     //Busco contacto en la lista para eliminar
     const indice: number =
     this.listaContactos
     .findIndex((c:Contacto)=> c.id === contacto.id);
     if(indice!==-1){
       //lo eliminamos de la lista
       this.listaContactos.splice(indice,1);
       //lo quito de seleccionado
       this.contactoSeleccionado=null;
           }
   })
 }
}

}
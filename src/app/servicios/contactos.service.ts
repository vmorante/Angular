import { Injectable,Inject } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Direcciones } from '../configuracion/direcciones.';


@Injectable()
export class ContactosService {

  
  //constructor(nombre: string) {
  constructor(
    private _htpp:Http,
    @Inject(Direcciones) private _direcciones:string
    ) {

  }


//recuperamos lista de contactos del servidor
  obtenerContactos(): Observable< Contacto[]> {
    
    //return  this._contactos;
   return  this._htpp
        .get(`${this._direcciones}/contactos`)
        .map(res => {
          //obtengo la lista de objetos que viene en el body
          const lista: any[]= res.json();
          //creo una lista de contactos y la devuelve
         return  lista.map(elemento =>{
           return  Contacto.desdeJSON(elemento);
          })
        
        });
        

        
       
  }
  //creamos un contacto en el servidor
  guardarContacto(contacto: Contacto): Observable <Contacto>{
    return this._htpp
                .post(`${this._direcciones}/contactos`,contacto)
                .map(res => Contacto.desdeJSON(res.json()));
  }


  //eliminamos un contacto del servidor

  eliminarContacto(contacto: Contacto): Observable<Contacto>{
    return this._htpp.delete(`${this._direcciones}/contactos/${contacto.id}`)
                      .map(res => Contacto.desdeJSON(res.json()));
  }
  



  //actualizamos un contacto del servidor
 editarContacto(contacto: Contacto): Observable<Contacto>{
    return this._htpp
                      .put(`${this._direcciones}/contactos/${contacto.id}`,contacto)
                      .map(res => Contacto.desdeJSON(res.json()));
  }


}

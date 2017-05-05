import { Injectable } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ContactosService {

  
  //constructor(nombre: string) {
  constructor(private _htpp:Http) {

  }

  obtenerContactos(): Observable< Contacto[]> {
    
    //return  this._contactos;
   return  this._htpp
        .get('http://localhost:3004/contactos')
        .map(res => {
          //obtengo la lista de objetos que viene en el body
          const lista: any[]= res.json();
          //creo una lista de contactos y la devuelve
         return  lista.map(elemento =>{
           return  Contacto.desdeJSON(elemento);
          })
        
        });
        

        
       
  }

  guardarContacto(contacto: Contacto): Observable <Contacto>{
    return this._htpp
                .post('http://localhost:3004/contactos',contacto)
                .map(res => Contacto.desdeJSON(res.json()));
  }

}

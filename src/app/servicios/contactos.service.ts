import { Injectable,Inject } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import {Observable} from 'rxjs/Observable';
import { Direcciones } from '../configuracion/direcciones.';


@Injectable()
export class ContactosService {

  
  //constructor(nombre: string) {
  constructor(
    private _htpp:Http,
    @Inject(Direcciones) private _direcciones:any
    ) {

  }


//recuperamos lista de contactos del servidor
  obtenerContactos(): Observable< Contacto[]> {
    
    //return  this._contactos;
   return  this._htpp
        .get(`${this._direcciones.servidor}/contactos`)
        .map(res => {
          //obtengo la lista de objetos que viene en el body
          const lista: any[]= res.json();
          //creo una lista de contactos y la devuelve
         return  lista.map(elemento =>{
           return  Contacto.desdeJSON(elemento);
          })
        
        }).share();
        

        
       
  }
  //creamos un contacto en el servidor
  guardarContacto(contacto: Contacto): Observable <Contacto>{
    return this._htpp
                .post(`${this._direcciones.servidor}/contactos`,contacto)
                .map(res => Contacto.desdeJSON(res.json()));
  }


  //eliminamos un contacto del servidor

  eliminarContacto(contacto: Contacto): Observable<any>{
    return this._htpp.delete(`${this._direcciones.servidor}/contactos/${contacto.id}`);
                      
  }
  



  //actualizamos un contacto del servidor
 editarContacto(contacto: Contacto): Observable<Contacto>{
    return this._htpp
                      .put(`${this._direcciones.servidor}/contactos/${contacto.id}`,contacto)
                      .map(res => Contacto.desdeJSON(res.json()));
  }

  generarRutaAvatar():Observable<string>{
   // http://faker.hook.io/?property=image.avatar
   return this._htpp
        .get(this._direcciones.faker)
        .map(res => {
          let rutaAvatar = res.text()
          rutaAvatar =rutaAvatar.replace(new RegExp('\"','g'),'')
          console.log(rutaAvatar);
          return rutaAvatar;
        })
        
  }


}

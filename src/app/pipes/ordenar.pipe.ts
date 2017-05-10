
import {Pipe,PipeTransform} from '@angular/core'
import { Contacto } from '../entidades/contacto';


@Pipe ({name: 'ordenar'})


export class OrdenarPipe implements PipeTransform{

    //con 'transform' creamos un nuevo dato y lo retornamos
    //no alteramos el original
    transform(contactos: Contacto[]){
        contactos.sort((contacto1, contacto2):number=>{
            const nombreCompleto1= `${contacto1.nombre} ${contacto1.apellidos}`;
             const nombreCompleto2= `${contacto2.nombre} ${contacto2.apellidos}`;

             if(nombreCompleto1 > nombreCompleto2) return 1;

             if(nombreCompleto2 > nombreCompleto1) return -1;

             return 0;
        });
        return contactos;

    }
}
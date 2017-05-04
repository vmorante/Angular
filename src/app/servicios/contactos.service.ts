import { Contacto } from '../entidades/contacto';
import{ Injectable} from '@angular/core';


@Injectable()
export class ContactosService{ 


    obtenerContactos(): Contacto[]{
        return [
  {
    nombre:"Steve Jobs",
    email: 'steve.jobs@apple.com',
    telefono:'656232389'
  },
  {
    nombre:"Bill Gates",
    email:'bill.gates@microsoft.com',
    telefono: '890328822'
  },
  {
    nombre: 'Elon musk',
    email: 'elon.musk@tesla.com',
    telefono: '899283929'
  }
];

    }

}
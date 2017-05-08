import { NgModule } from '@angular/core';
import {RouterModule,Routes}   from '@angular/router' 
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';
import { Contacto } from './entidades/contacto';
import { ContactosResolve } from './servicios/contactos-resolve.service';


//Definimos la coleccion de rutas de nuestra app


const rutas : Routes = [
    {
        path:'mis-contactos',
        component: MisContactosComponent,
        //antes de sacar esa pagina, cargamos la lista del servidor
        resolve:{
            contactos: ContactosResolve
        }
    },
    {
        path:'nuevo-contacto',
        component: NuevoContactoComponent
    },
    {
        path:'**',
        redirectTo: '/mis-contactos'
    }

];


//creamos un nuevo modulo de routing a partir de las rutas definidas

const moduloConRutas =RouterModule.forRoot(rutas);

@NgModule({
    imports:[moduloConRutas],
    exports:[RouterModule]
})

export class AppRoutingModule{}



import { Component, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/subject';
import { Subscription} from 'rxjs/subscription';
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'

import{Jsonp,URLSearchParams,Response,RequestOptions} from '@angular/http'
@Component({
    selector:'ejemplos-observables',
    template: ''
})

export class EjemploObservableComponenent{

    private _miObservable$ : Observable<any> = Observable.create((observador: Observer<any>)=>{

        //con el observaodr puedo emitir valores,errores o que ha terminado
        console.log('voy a emitir');
        observador.next('Buenos dias');
        observador.next(1234);
        //emitimos un errir
        //observador.error('se ha roto')


        //Indicamos que ha termindado
        observador.complete();

    })
    constructor(){
        this._miObservable$.subscribe(
            dato =>{
        console.log(`Dato RECIBIDO desde el observable(next) ${dato}`);
    },
    error =>{
                console.error(`Dato error: ${error}`);
        },
        () =>{
            console.log(`ha terminado`)
        }
        );
    }

}

//ejemplos de observables con operadores

@Component({
    selector: 'ejemplos-obsevables-wikipedia',
    template: `
    <div>
    <input (input)="buscarWikipedia($event)"/>
    <ul>
    <li *ngFor="let resultado of _suscripcionCajaTexto | async">
    {{resultado}}
    </li>

    </ul>
    </div>
    `

})



export class EjemplosObservablesWikipediaComponent implements OnDestroy{

    private _flujoDeDatosCajaTexto :Subject<string> =
    new Subject();

    resultados:string[];
    _suscripcionCajaTexto: any;

    constructor(private _jsonp:Jsonp){
        this._suscripcionCajaTexto=
        this._flujoDeDatosCajaTexto
        .debounceTime(500)
        .distinctUntilChanged()
        .switchMap((palabra: string)=>
            
             this.peticionBusqueda(palabra)

         )
        /*.subscribe(   resultados =>{
            this.resultados =resultados;
        }        
        )*/
    
}
    buscarWikipedia(evento: KeyboardEvent  ){
        //hacemos emisioon de evento
        console.log('evento',evento);
        const datoAEmitir =(evento.target as HTMLInputElement).value;
        this._flujoDeDatosCajaTexto.next(datoAEmitir);
    }

    peticionBusqueda(palabra:string):Observable<any>{
        const parametros: URLSearchParams = new URLSearchParams()
        parametros.set('search',palabra);
        parametros.set('action','opensearch');
        parametros.set('format', 'json');
        parametros.set('callback','JSONP_CALLBACK');
        let opciones: RequestOptions = new RequestOptions();
        opciones.search = parametros;

        return this._jsonp
                    .get('http://en.wikipedia.org/w/api.php',opciones)
                    .map((respuesta:Response)=>{
                        console.log('hola')
                        console.info(respuesta.json());
                        return respuesta.json()[1];
                    })

    }

ngOnDestroy(): void{
    // nos subcribimos del observable
    this._suscripcionCajaTexto.unsubscribe();
}

}
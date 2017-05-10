
import {Directive,ElementRef,Renderer,HostListener} from '@angular/core'

@Directive({selector:'[EjemplosDirectivasAtributo]'})
export class EjemplosDirectivasAtributoDirective{


    constructor(
        private _elementRef: ElementRef,
        private _renderer :Renderer
    ){}
    @HostListener('mouseenter')
    ponerEstilo(){
        this.cambiarEstilo(true);
    }

    @HostListener('mouseleave')
    quitarEstilo(){
        this.cambiarEstilo(false);
    }
    cambiarEstilo(activo:boolean){
        console.log('estoy encima');
        this._renderer.setElementStyle(this._elementRef.nativeElement,'font-weight',activo ? 'bold': 'normal');
        this._renderer.setElementStyle(this._elementRef.nativeElement,'color',activo ? 'red':'blue');
    }
}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EjemploBindingComponent = (function () {
    function EjemploBindingComponent() {
        this.alumnos = 'Babel';
        this.numeroDeLaSuerte = 43;
        // binding de propiedades
        this.textAreaLineas = 6;
        // binding de clases
        this.pintamosClase = true;
        this.clases = { uno: false, dos: true };
        this.mensaje = 'cambiame';
    }
    EjemploBindingComponent.prototype.obtenerColor = function () {
        return 'green';
    };
    EjemploBindingComponent.prototype.obtenerEstilos = function () {
        return {
            backgroundColor: 'red',
            color: 'white'
        };
    };
    EjemploBindingComponent.prototype.mostrarMensaje = function () {
        alert('Hola señores');
    };
    return EjemploBindingComponent;
}());
EjemploBindingComponent = __decorate([
    core_1.Component({
        selector: 'ejemplos-binding',
        templateUrl: '/app/ejemplos/ejemplo-binding.component.html',
        styles: ["\n    .caja {\n      width: 50px;\n      height: 50px;\n      background-color: red;\n    }\n  "]
    })
], EjemploBindingComponent);
exports.EjemploBindingComponent = EjemploBindingComponent;
//# sourceMappingURL=ejemplo-binding.component.js.map
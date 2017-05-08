"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var contacto_1 = require("../entidades/contacto");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var direcciones_1 = require("../configuracion/direcciones.");
var ContactosService = (function () {
    //constructor(nombre: string) {
    function ContactosService(_htpp, _direcciones) {
        this._htpp = _htpp;
        this._direcciones = _direcciones;
    }
    //recuperamos lista de contactos del servidor
    ContactosService.prototype.obtenerContactos = function () {
        //return  this._contactos;
        return this._htpp
            .get(this._direcciones.servidor + "/contactos")
            .map(function (res) {
            //obtengo la lista de objetos que viene en el body
            var lista = res.json();
            //creo una lista de contactos y la devuelve
            return lista.map(function (elemento) {
                return contacto_1.Contacto.desdeJSON(elemento);
            });
        });
    };
    //creamos un contacto en el servidor
    ContactosService.prototype.guardarContacto = function (contacto) {
        return this._htpp
            .post(this._direcciones.servidor + "/contactos", contacto)
            .map(function (res) { return contacto_1.Contacto.desdeJSON(res.json()); });
    };
    //eliminamos un contacto del servidor
    ContactosService.prototype.eliminarContacto = function (contacto) {
        return this._htpp.delete(this._direcciones.servidor + "/contactos/" + contacto.id)
            .map(function (res) { return contacto_1.Contacto.desdeJSON(res.json()); });
    };
    //actualizamos un contacto del servidor
    ContactosService.prototype.editarContacto = function (contacto) {
        return this._htpp
            .put(this._direcciones.servidor + "/contactos/" + contacto.id, contacto)
            .map(function (res) { return contacto_1.Contacto.desdeJSON(res.json()); });
    };
    ContactosService.prototype.generarRutaAvatar = function () {
        // http://faker.hook.io/?property=image.avatar
        return this._htpp
            .get(this._direcciones.faker)
            .map(function (res) {
            var rutaAvatar = res.text();
            rutaAvatar = rutaAvatar.replace(new RegExp('\"', 'g'), '');
            console.log(rutaAvatar);
            return rutaAvatar;
        });
    };
    return ContactosService;
}());
ContactosService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(direcciones_1.Direcciones)),
    __metadata("design:paramtypes", [http_1.Http, Object])
], ContactosService);
exports.ContactosService = ContactosService;
//# sourceMappingURL=contactos.service.js.map
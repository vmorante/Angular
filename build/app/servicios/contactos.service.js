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
var core_1 = require("@angular/core");
var contacto_1 = require("../entidades/contacto");
var ContactosService = (function () {
    //constructor(nombre: string) {
    function ContactosService() {
    }
    ContactosService.prototype.obtenerContactos = function () {
        return [
            contacto_1.Contacto.desdeJSON({
                id: 1,
                nombre: 'Steve',
                apellidos: 'Jobs',
                email: 'steve.jobs@apple.com',
                telefono: '64237846246',
                twitter: '@steveJobs',
                facebook: 'steveJobs',
                avatar: ''
            }),
            contacto_1.Contacto.desdeJSON({
                id: 2,
                nombre: 'Bill',
                apellidos: 'Gates',
                email: 'bill.gates@microsoft.com',
                telefono: '21878216381',
                twitter: 'billgates',
                facebook: 'billgates',
                avatar: ''
            }),
            contacto_1.Contacto.desdeJSON({
                id: 3,
                nombre: 'Elon ',
                apellidos: 'Musk',
                email: 'elon.musk@tesla.com',
                telefono: '981293998711289',
                twitter: 'elonmusk',
                facebook: 'elonmusk',
                avatar: ''
            })
        ];
    };
    return ContactosService;
}());
ContactosService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ContactosService);
exports.ContactosService = ContactosService;
//# sourceMappingURL=contactos.service.js.map
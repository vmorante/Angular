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
var contactos_service_1 = require("./contactos.service");
var ContactosResolve = (function () {
    function ContactosResolve(_contactosService) {
        this._contactosService = _contactosService;
    }
    ContactosResolve.prototype.resolve = function (route) {
        return this._contactosService.obtenerContactos();
    };
    return ContactosResolve;
}());
ContactosResolve = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [contactos_service_1.ContactosService])
], ContactosResolve);
exports.ContactosResolve = ContactosResolve;
//# sourceMappingURL=contactos-resolve.service.js.map
"use strict";
// Representa una entidad contacto
var Contacto = (function () {
    function Contacto(id, nombre, apellidos, email, telefono, twitter, facebook, avatar) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.telefono = telefono;
        this.twitter = twitter;
        this.facebook = facebook;
        this.avatar = avatar;
    }
    //metodo estatico de la clase contacto
    Contacto.desdeJSON = function (json) {
        return new Contacto(json.id, json.nombre, json.apellidos, json.email, json.telefono, json.twitter, json.facebook, json.avatar);
    };
    //metodo de instancia(lo tienen todas las instancias de contacto)
    Contacto.prototype.generarRutaFacebook = function () {
        return this.facebook ? "https://facebook.com/" + this.facebook : null;
    };
    Contacto.prototype.generarRutaTwitter = function () {
        return this.twitter ? "https://twitter.com/" + this.twitter : null;
    };
    return Contacto;
}());
exports.Contacto = Contacto;
//# sourceMappingURL=contacto.js.map
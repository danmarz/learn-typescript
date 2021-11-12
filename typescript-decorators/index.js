"use strict";
// const decorationFactory = (name: string) => {
//     return (constructor: Function) => {
//         console.log(`soy el decorador ${name}`);
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// const miDecorador = (constructor: Function) => {    // constructor es el constructor de la clase  || target es el constructor de la clase
//     console.log('soy el decorador 1');
// }
// const miDecorador2 = (constructor: Function) => {    // constructor es el constructor de la clase  || target es el constructor de la clase
//     console.log('soy el decorador 2');
// }
// @decorationFactory('numero 1')
// @miDecorador
// @miDecorador2
// class miClass {
// }
// const miObjeto = new miClass();
function MyClassDecorator(target) {
    var newConstructor = function () {
        target.apply(this);
        this.hello = "world";
        this.myfunc = function () { console.log('hello ' + this.hello); };
    };
    newConstructor.prototype = target.prototype;
    return newConstructor;
}
;
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass = __decorate([
        MyClassDecorator
    ], MyClass);
    return MyClass;
}());
var miObjeto = new MyClass();
console.log(miObjeto.hello);
miObjeto.myfunc();

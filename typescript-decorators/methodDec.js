var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function methodDec(target, methodName, descriptor) {
    console.log("target: " + target);
    console.log("methodName: " + methodName);
    console.log("descriptor: " + JSON.stringify(descriptor));
    console.log("target[methodName]: " + target[methodName]);
}
var ClassWithMethodDec = /** @class */ (function () {
    function ClassWithMethodDec() {
    }
    ClassWithMethodDec.prototype.print = function (output) {
        console.log("print: " + output + " called.");
    };
    __decorate([
        methodDec
    ], ClassWithMethodDec.prototype, "print");
    return ClassWithMethodDec;
}());
var myObject2 = new ClassWithMethodDec();
myObject2.print('hola');

// const decorationFactory = (name: string) => {
//     return (constructor: Function) => {
//         console.log(`soy el decorador ${name}`);
//     }
// }

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

function MyClassDecorator<TFunction extends Function>(target: TFunction): TFunction {
    let newConstructor = function (this: any) {
        target.apply(this);
        this.hello = "world"
        this.myfunc = function(){ console.log('hello ' + this.hello);}
    }

    newConstructor.prototype = target.prototype;
    return <any>newConstructor
};

@MyClassDecorator
class MyClass {
    [x: string]: any;
}

const miObjeto = new MyClass();
console.log(miObjeto.hello);
miObjeto.myfunc();
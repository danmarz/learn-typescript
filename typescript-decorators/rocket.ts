// function MyClassDecorator<TFunction extends Function>(target: TFunction): TFunction {
//     let newConstructor = function (this: any) {
//         target.apply(this);
//         this.hello = "world"
//     }

//     newConstructor.prototype = target.prototype;

//     return <any>newConstructor
// };

// @MyClassDecorator
// class MyClass {

// }

// const miObjeto = new MyClass();
// console.log(miObjeto.hello);
function methodDec(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
){
    console.log(`target: ${target}`);
    console.log(`methodName: ${methodName}`);
    console.log(`descriptor: ${JSON.stringify(descriptor)}`);
    console.log(`target[methodName]: ${target[methodName]}`);
}
class ClassWithMethodDec {
    @methodDec
    print(output:string) {
        console.log(`print: ${output} called.`);
    }
}

const myObject2 = new ClassWithMethodDec();
myObject2.print('hola');
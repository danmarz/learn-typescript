# Typescript

Superset of JS - Extends Javascript with structured data-types, OOP, ESNext modules, etc. Typescript is comprised of:
- Language
- Transpiler
- Linter (error check at compile-time) 

## Official docs
- https://www.typescriptlang.org/
- https://docs.nestjs.com/

## Exercises
- https://exercism.org/tracks/typescript
- https://typescript-exercises.github.io/
- https://www.codingame.com/start

## Usage
- `npm init -y`
- `npm i -D typescript` -> `npx tsc --init` to create a tsconfig.js file
- `npm i -D ts-node` -> https://www.npmjs.com/package/ts-node
- `npm i -D @types/node` -> definitelytyped.org

#### Type Definition syntax

`const variable: <<type>> = VALUE`

#### Basic types

- string
- number
- boolean
- Array
- Other basic types: *any*, *unknown*, *never*

#### Complex types

- Customized: 
    - type Names = 'Pepe' | 'Sara' --literals
    - type Age = string | number
- Interface:
```js
    Interface Person{
        name: string;
        age: number;
        address: Address;
    }
```
### Types vs Interfaces
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
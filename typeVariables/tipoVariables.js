//  VARIABLE VAR
var x = 3;      // declaro y asigno un valor
console.log(x);

x = 4;
console.log(x);  // reasigno un valor a una variable ya declarada

var x = 'hola'; // redeclaro y asigno un valor (creo que si redeclaro una variable no estaria reasignando un valor, sino poniendo uno nuevo o diferente)
console.log(x);


// esto es lo que esta permitido, con la variable 'var' se puede redeclarar una variable pero solo del tipo var y se puede reasignar un valor

// -------------------------------

// VARIBLE LET

let z = 3; // declaro una variable y asigno un valor
console.log(z)

z = 'kevin'; // reasigno un valor a una variable ya declarada
console.log(z);

// let z = 4;      // redeclaron la variable z y le pongo un valor (esto no tendria que funcionar)
// console.log(z)

// var z = 4;       // redeclarando con otro tipo de variable, (no funciona tampoco, por lo mismo, la variable let ya esta declarada y no se puede redeclarar)
// console.log(z);     

// con la variable let solo se puede reasignar un valor pero no se puede redeclarar.

// --------------------------------------

// VARIBLE CONST

const y = 3; // declaro y asigno un valor
console.log(3);

// y = 'hola'; // reasigno un valor (esto no tendria que funcionar)
// console.log(y);

// const y = 4; // redeclaro y asigno un valor (esto no tendria que funcionar porque no se puede redeclarar una variable const)
// console.log(y);

// con la variable const no se puede redeclarar y no se puede reasignar un valor
